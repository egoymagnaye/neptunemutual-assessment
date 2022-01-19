import Head from "next/head";
import Header from "../components/layout/globals/Header";
import Converter from "../components/converter/Converter";
import Wallet from "../components/wallet/Wallet";
import Footer from "../components/layout/globals/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Neptune Mutual - Assessment</title>
        <meta
          name="description"
          content="Crypto Converter and Wallet Details Popup"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-md mt-20 md:mt-32">
        <Header />
        <Converter />
        <Footer />
      </div>
      <Wallet />
    </>
  );
};

export default Home;
