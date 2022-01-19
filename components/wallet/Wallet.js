import { useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connector";
import { AppContext } from "../../context/AppContext";
import Modal from "../layout/ui/modal/Modal";
import WalletDetails from "./details/WalletDetails";
import WalletNote from "./note/WalletNote";
import Button from "../layout/ui/buttons/Button";
import Loading from "../layout/loading/Loading";

const Wallet = () => {
  const { isModalOpen, toggleModalHandler, isLoading, setLoadingHandler } =
    useContext(AppContext);

  const { active, activate, deactivate } = useWeb3React();

  const connect = async () => {
    setLoadingHandler();

    try {
      await activate(injected);

      setLoadingHandler();
    } catch (error) {
      // Do error handling
    }
  };

  const disconnect = async () => {
    setLoadingHandler();

    try {
      await deactivate();

      setLoadingHandler();
    } catch (error) {
      // Do error handling
    }
  };

  let footerMarkup = null;

  footerMarkup = !active ? (
    <>
      <Button
        type="button"
        className="focus:ring-blue-800 hover:bg-blue-800 bg-blue-800 mb-5 md:mb-0"
        label="Connect Wallet"
        onClickHandler={connect}
      />
      <Button
        type="button"
        className="focus:ring-gray-300 hover:bg-gray-50 bg-white text-gray-700 border-gray-300"
        label="Cancel"
        onClickHandler={toggleModalHandler}
      />
    </>
  ) : (
    <Button
      type="button"
      className="focus:ring-red-800 hover:bg-red-800 bg-red-800"
      label="Disconnect Wallet"
      onClickHandler={disconnect}
    />
  );

  return (
    <Modal open={isModalOpen} setOpen={toggleModalHandler}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
          Wallet Details
        </h3>
        {active ? <WalletDetails /> : <WalletNote />}
        {isLoading && <Loading />}
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        {footerMarkup}
      </div>
    </Modal>
  );
};

export default Wallet;
