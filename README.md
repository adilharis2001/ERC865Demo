# An ERC865 Demo Implementation

A demo which showcases the transfer of ERC 865 tokens using the metamask browser extension and the truffle webpack demo

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

## Built With

* [Truffle Webpack](https://github.com/trufflesuite/truffle-init-webpack)
* [Zeppelin Solidity](https://github.com/OpenZeppelin/openzeppelin-solidity/pull/741)

## Authors

* **Adil Haris** - *Initial work* - [http://www.adilharis.com](https://github.com/adilharis2001)
