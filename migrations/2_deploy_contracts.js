const campaignFactory = artifacts.require("CampaignFactory");

module.exports = function(deployer) {
  
  deployer.deploy(campaignFactory);
};