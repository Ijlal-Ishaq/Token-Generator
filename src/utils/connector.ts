import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 97, 80001, 137, 56],
  // supportedChainIds: [4],
});
