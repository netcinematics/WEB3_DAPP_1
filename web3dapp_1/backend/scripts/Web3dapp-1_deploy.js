const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("Web3dapp-1");
	const contract = await Contract.deploy();

	await contract.deployed();

	console.log("Web3dapp-1 deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});