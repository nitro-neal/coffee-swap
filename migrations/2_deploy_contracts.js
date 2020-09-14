var CoffeeToken = artifacts.require("./CoffeeToken.sol");
var Barista = artifacts.require("./Barista.sol");

const _name = "CoffeeToken";
const _symbol = "COFFEE";
const _decimals = 18;
const _total_supply = 1000000;

// address _devAddress = "0xd451529682a2f6AB4A1d226bF038c67a56110390";
module.exports = function (deployer, network, accounts) {
  deployer
    .deploy(CoffeeToken, _name, _symbol, _decimals, _total_supply)
    .then(function (instance) {
      deployer.deploy(
        Barista,
        instance.address,
        "100000000000000000000",
        8647240,
        8648240
      );
    });
};
