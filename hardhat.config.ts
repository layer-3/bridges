import "dotenv/config";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-change-network";

let accounts;

if (process.env.MNEMONIC) {
  accounts = {
    mnemonic: process.env.MNEMONIC,
    initialIndex: 0,
    count: 10,
  };
} else if (process.env.PRIVATE_KEY) {
  accounts = [process.env.PRIVATE_KEY];
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v5",
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic:
          "bring tumble anger wild frame you famous usage ramp federal captain company",
        count: 100,
      },
    },
    ethereum: {
      url: process.env.ETHEREUM_URL ?? "",
      accounts,
    },
    sepolia: {
      url: process.env.SEPOLIA_URL ?? "",
      accounts,
    },
    matic: {
      url: process.env.POLYGON_URL ?? "",
      gasPrice: 2e11,
      accounts,
    },
    mumbai: {
      url: process.env.MUMBAI_URL ?? "",
      accounts,
    },
    bsc: {
      url: process.env.BSC_URL ?? "",
      accounts,
    },
    "bsc-testnet": {
      url: process.env.BSC_TESTNET_URL ?? "",
      accounts,
    },
    avalanche: {
      url: process.env.AVALANCHE_URL ?? "",
      accounts,
    },
    "avalanche-fuji": {
      url: process.env.AVALANCHE_FUJI_URL ?? "",
      accounts,
    },
    arbitrum: {
      url: process.env.ARBITRUM_URL ?? "",
      accounts,
    },
    "arbitrum-sepolia": {
      url: process.env.ARBITRUM_SEPOLIA_URL ?? "",
      accounts,
    },
    optimism: {
      url: process.env.OPTIMISM_URL ?? "",
      accounts,
    },
    "optimism-sepolia": {
      url: process.env.OPTIMISM_SEPOLIA_URL ?? "",
      accounts,
    },
    fantom: {
      url: process.env.FANTOM_URL ?? "",
      accounts,
    },
    "fantom-testnet": {
      url: process.env.FANTOM_TESTNET_URL ?? "",
      accounts,
    },
    zkEVM: {
      url: process.env.ZKEVM_URL ?? "",
      accounts,
    },
    "zkEVM-testnet": {
      url: process.env.ZKEVM_TESTNET_URL ?? "",
      accounts,
    },
    zkSync: {
      url: process.env.ZKSYNC_URL ?? "",
      accounts,
    },
    "zkSync-testnet": {
      url: process.env.ZKSYNC_TESTNET_URL ?? "",
      accounts,
    },
  },
};

export default config;
