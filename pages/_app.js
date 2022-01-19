import AppContextProvider from "../context/AppContext";
import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
