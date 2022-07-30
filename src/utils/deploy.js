/* eslint-disable eqeqeq */
import Web3 from "web3";
import CompiledContract from "./ERC20.json";

export const deploy = async (
  tokenName,
  tokenSymbol,
  supply,
  decimals,
  web3Context,
  setverifyState
) => {
  const web3 = new Web3(web3Context?.library?.currentProvider);

  console.log(`Attempting to deploy from account: ${web3Context.account}`);

  const deployedContract = await new web3.eth.Contract(CompiledContract.abi)
    .deploy({
      data: "0x" + CompiledContract.evm.bytecode.object,
      arguments: [
        tokenName,
        tokenSymbol,
        web3.utils.toWei(web3.utils.toBN(supply), "ether"),
        decimals,
      ],
    })
    .send({
      from: web3Context.account,
    })
    .on("confirmation", async (confirmationNo) => {
      if (confirmationNo == 1) {
        setverifyState(true);
      }
      if (confirmationNo == 3) {
        setverifyState(false);
      }
    });

  console.log(
    `Contract deployed at address: ${deployedContract.options.address}`
  );

  return deployedContract.options.address;
};
