const { network, ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const donId = ethers.encodeBytes32String(process.env.DON_ID);
    const routerAddress = ethers.ZeroAddress;

    const args = [
        ethers.parseEther(process.env.INIT_DIARY_SAVING_FEE),
        ethers.parseEther(process.env.INIT_COVER_FEE),
        process.env.INIT_URI,
        routerAddress,
        donId,
    ];

    const diary = await deploy("Diary", {
        from: deployer,
        args: args,
        log: true,
    });
};
module.exports.tags = ["all", "diary"];
