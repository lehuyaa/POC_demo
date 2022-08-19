import "./index.css";

import { BitkubTestnet, DEFAULT_RPC } from "utils/network";
import { Config, DAppProvider, DEFAULT_SUPPORTED_CHAINS } from "@usedapp/core";
import { QueryClient, QueryClientProvider } from "react-query";

import { ComponentType } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const queryClientOption = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};
const queryClient = new QueryClient(queryClientOption);

const config: Config = {
  readOnlyChainId: BitkubTestnet.chainId,
  readOnlyUrls: {
    [BitkubTestnet.chainId]: DEFAULT_RPC.bitkubTestnet,
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, BitkubTestnet],
};
function render(App: ComponentType) {
  console.log(config);
  root.render(
    <QueryClientProvider client={queryClient}>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default render;
