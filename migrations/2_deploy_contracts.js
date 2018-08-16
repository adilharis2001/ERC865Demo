var ERC865Token=artifacts.require("./ERC865Token.sol");

module.exports = function(deployer,network,accounts) {
deployer.deploy(ERC865Token);
};
