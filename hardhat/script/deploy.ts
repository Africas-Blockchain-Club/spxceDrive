import { ethers } from "hardhat";


const main = async () => {
	const [deployer] = await  ethers.getSigners();

	console.log("Deploying contract with address : ", deployer);

	const factory = await ethers.getContractFactory("Spxce");
	const contract = await factory.deploy()

	console.log("Contract deployed at : ",await  contract.getAddress());

}

main().then(() =>{
	console.log("success")
}).catch((error) =>{
	console.error(error);
})