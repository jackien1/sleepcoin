const Shop = artifacts.require("Shop");

module.exports = async function(deployer) {
  await deployer.deploy(Shop);

  console.log(Shop.address);
};
