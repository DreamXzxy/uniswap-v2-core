import { ethers } from "hardhat"

import { UniswapV2Factory } from '../typechain'

async function deployUniswapV2Factory() {
  const [wallet] = await ethers.getSigners()
  console.log("deployer.address: ", wallet.address)

  const uniswapV2FactoryFactory = await ethers.getContractFactory('UniswapV2Factory')
  const uniswapV2Factory = (await uniswapV2FactoryFactory.deploy(wallet.address)) as UniswapV2Factory
  await uniswapV2Factory.deployed()
  console.log("UniswapV2Factory address:", await uniswapV2Factory.address)
}

async function main() {
  await deployUniswapV2Factory()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
