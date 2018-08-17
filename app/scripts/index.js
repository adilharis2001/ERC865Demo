// Import the page's CSS. Webpack will know what to do with it.
import '../styles/app.css'

// Import libraries we need.
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import erc865TokenArtifact from '../../build/contracts/ERC865Token.json'

// ERC865Token is our usable abstraction, which we'll use through the code below.
const erc865Token = contract(erc865TokenArtifact)

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts
let account

const App = {
  start: function () {
    const self = this

    // Bootstrap the erc865Token abstraction for Use.
    erc865Token.setProvider(web3.currentProvider)

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        alert('There was an error fetching your accounts.')
        return
      }

      if (accs.length === 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }

      accounts = accs
      account = accounts[0]
	  var accountInterval = setInterval(function() {
		  if (web3.eth.accounts[0] !== account) {
			account = web3.eth.accounts[0];
			self.refreshBalance()
			self.refreshEther()
		  }
	  }, 100);
	  self.refreshBalance()
	  self.refreshEther()
    })
  },

  setStatus: function (message) {
    const status = document.getElementById('status')
    status.innerHTML = message
  },
  
  setSign: function (message) {
    const status = document.getElementById('signature')
    status.value = message;
  },
  
  refreshBalance: function () {
    const self = this
    let erc865
    erc865Token.deployed().then(function (instance) {
      erc865 = instance
      return erc865.balanceOf.call(account, { from: account })
    }).then(function (value) {
      const balanceElement = document.getElementById('balance')
	  const addressElement = document.getElementById('address')
      balanceElement.innerHTML = value.valueOf()
	  addressElement.innerHTML = account
    }).catch(function (e) {
      console.log(e)
      self.setStatus('Error getting balance; see log.')
    })
  },
  
  refreshEther: function () {
    const self = this
    var bal = web3.eth.getBalance(account, function(err, balance) {
	  if (!err){
		const ethersElement = document.getElementById('ethers')
	    ethersElement.innerHTML = balance
	  }
	})
  },


  sendCoin: function () {
    const self = this

    const amount = parseInt(document.getElementById('amount').value)
    const receiver = document.getElementById('receiver').value

    this.setStatus('Initiating transaction... (please wait)')

    let erc865
    erc865Token.deployed().then(function (instance) {
      erc865 = instance
      return erc865.transfer(receiver, amount, { from: account })
    }).then(function () {
      self.setStatus('Transaction complete!')
      self.refreshBalance()
	  self.refreshEther()
    }).catch(function (e) {
      console.log(e)
      self.setStatus('Error sending coin; see log.')
    })
  },
  
   delegatedTransfer: function () {
    const self = this

	const receiver = document.getElementById('receiver').value.toString()
    const amount = parseInt(document.getElementById('amount').value)
	const fee = parseInt(document.getElementById('fee').value)
	const nonce = parseInt("12345")
	const signature = document.getElementById('signature').value.toString()

    this.setStatus('Initiating transaction... (please wait)')

    let erc865
    erc865Token.deployed().then(function (instance) {
      erc865 = instance
      return erc865.transferPreSigned(signature,receiver,amount,fee,nonce, { from: account })
    }).then(function () {
      self.setStatus('Transaction complete!')
      self.refreshBalance()
	  self.refreshEther()
    }).catch(function (e) {
      console.log(e)
      self.setStatus('Error sending coin; see log.')
    })
  },
  
   generateSign: function () {
    const self = this
	const receiver = document.getElementById('receiver').value.toString()
    const amount = parseInt(document.getElementById('amount').value)
	const fee = parseInt(document.getElementById('fee').value)
	const nonce = parseInt("12345")

    let erc865
    erc865Token.deployed().then(function (instance) {
      erc865 = instance
	  const token = erc865.address.toString()
      return erc865.transferPreSignedHashing(token, receiver, amount, fee, nonce)
    }).then(function (hash) {
		web3.eth.sign(account, hash, function(error, signature) {
                if (!error) {
                  console.log("Hash:"+hash);
                  console.log("Signature:"+signature);
				  self.setSign(signature)
                } else {
                  console.log(error);
                }
              });
    })
  }
}

window.App = App

window.addEventListener('load', function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn(
      'Using web3 detected from external source.' +
      ' If you find that your accounts don\'t appear or you have 0 erc865Token,' +
      ' ensure you\'ve configured that source properly.' +
      ' If using MetaMask, see the following link.' +
      ' Feel free to delete this warning. :)' +
      ' http://truffleframework.com/tutorials/truffle-and-metamask'
    )
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider)
  } else {
    console.warn(
      'No web3 detected. Falling back to http://127.0.0.1:7545.' +
      ' You should remove this fallback when you deploy live, as it\'s inherently insecure.' +
      ' Consider switching to Metamask for development.' +
      ' More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
    )
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))
  }

  App.start()
})
