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

1. Add a custom RPC on Metamask and point to http://206.189.43.221:7545/
2. Import the account with private key "0xac3c9576e1eb9c2a7c77b59009187dbfc27b571df1b28eb6d8f962f2d32020f8"
3. Head over to http://206.189.43.221:8080/ and play around

Kindly don't spam transactions, hack or bring the node down. Please.

## Built With

* [Truffle Webpack](https://github.com/trufflesuite/truffle-init-webpack)
* [Zeppelin Solidity](https://github.com/OpenZeppelin/openzeppelin-solidity/pull/741)

## Authors

* **Adil Haris** - *Initial work* - [http://www.adilharis.com](https://github.com/adilharis2001)
