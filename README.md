# An ERC865 Demo

A demo which showcases the transfer of ERC 865 tokens using the metamask browser extension and the truffle webpack demo

### Overview

The ERC865 token standard adds a delegated version to each of the ERC20 methods (except those that result in state changes) to allow a delegate to execute the method on behalf of the token holder -
1. transferPreSigned()
2. approvePreSigned()
3. increaseApprovalPreSigned()
4. decreaseApprovalPreSigned()
5. approveAndCallPreSigned()
6. revokeSignaturePreSigned()

Each of the above methods accepts a signature of type bytes in addition to the other parameters such as the receiving address, value to be sent, fee to the delegate and the nonce of the sender.

A delegated transfer (say using the transferPreSigned() method) would involve the following steps - 
1. In the wallet interface, gather user input for the receiving address, value, fee and nonce
2. Create a hash of the above parameters using keccak256 in solidity or the getPreSignedHash() method which is usually built into the ERC865 contract
3. In the backend code of your wallet, use web3.eth.sign() to generate a signature of the above hash with the user's account.
4. This signature can be now passed to the delegate, along with the other parameters of the transaction and the corresponding method can be executed in the smart contract

Note: The ERC865 contract used in this demo is not up to date. Kindly refer to the CoinvestV2 smart contract for a cleaner implementation - https://github.com/RobertMCForster/CoinvestV2Audit/blob/master/contracts/CoinvestTokenV2.sol

### Prerequisites

What things you need to install the software and how to install them

1. Metamask (https://metamask.io/)
2. NodeJS (https://nodejs.org/en/)
3. Ganache (https://truffleframework.com/ganache)
3. Truffle Framework
```
npm install -g truffle
```

### Deployment

1. Extract the code to a project directory
2. Run Ganache and ensure that the RPC port is up and running.
   For the purpose of this demo, we assume Ganache is running your private Ethereum node on http://127.0.0.1:7545
3. Add your custom RPC in Metamask at http://127.0.0.1:7545
4. Add your **first account on Ganache** onto Metamask, by exporting private key
5. Open the file truffle.js, and make sure the host and port points to http://127.0.0.1 and 7545 respectively
6. Connect truffle to your private Ethereum node run by Ganache
```
truffle console --network dev
```
7. Run the commands below in sequence
```
truffle(dev)> compile
```
```
truffle(dev)> migrate --reset
```
8. Open another console window and start your server with the below command
```
npm run dev
```
9. Follow the demo at https://youtu.be/dAbD3Vhdy6U for transfering tokens without ether

### Debugging

If you run into problems running the code should try removing the node modules folder and running a fresh install
```
rm -r node_modules
```
```
npm install
```
### Demo

Follow the steps below if you want to skip all the hardship and head straight to a demo

1. Head over to http://delegation.adilharis.com:8080/
2. Connect your metamask to Rinkeby and get some ether from the test faucet
3. After getting hold of some test ether, hit the "Mint Token" button to receive 1000 ERC865 Token
4. Refer here if you have queries on how to use this demo: https://youtu.be/dAbD3Vhdy6U

Kindly don't spam transactions, hack or bring the node down. Please.

## Built With

* [Truffle Webpack](https://github.com/trufflesuite/truffle-init-webpack)
* [Zeppelin Solidity](https://github.com/OpenZeppelin/openzeppelin-solidity/pull/741)

## Authors

* **Adil Haris** - [http://www.adilharis.com](https://github.com/adilharis2001)
