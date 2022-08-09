require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/** 
 @type import('hardhat/config').HardhatUserConfig  
**/

module.exports = {
  paths: { //se enrutan las fuentes del blockchain
    sources: "./hardhat/contracts",
    tests: "./hardhat/test",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts"
  },
  defaultNetwork: "kovan",
    networks: {
      hardhat: {
        // If want to do some forking, uncomment this
        // forking: {
        //  url: MAINNET_RPC_URL
        // }
      },
      localhost: {
      },
      kovan: {
        url: process.env.KOVAN_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
        saveDeployments: true,
      }
    },
  solidity: "0.8.9",
};