# An ERC865 Demo Implementation

A demo which showcases the transfer of ERC 865 tokens using the metamask browser extension and the truffle webpack demo

### Prerequisites

What things you need to install the software and how to install them

1. Metamask (https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
2. NodeJS (https://nodejs.org/en/)
3. Ganache (https://truffleframework.com/ganache)
3. Truffle Framework
```
npm install -g truffle
```

### Installing

1. Extract the code to a project directory
2. Run Ganache and ensure that the RPC port is up and running.
   For the purpose of this demo, we assume Ganache is running your private Ethereum node on http://127.0.0.1:7545
3. Open the file truffle.js, and make sure the host and port points to http://127.0.0.1 and 7545 respectively
4. Connect truffle to your private Ethereum node run by Ganache
```
truffle console --network dev
```
5. Run the commands below in sequence
```
truffle(dev)> compile
```
```
truffle(dev)> migrate
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
