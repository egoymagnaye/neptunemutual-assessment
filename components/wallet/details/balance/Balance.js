import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

const Balance = () => {
  const { account, library, chainId } = useWeb3React();

  const [balance, setBalance] = useState();

  useEffect(() => {
    if (!!account && !!library) {
      let stale = false;

      const getBal = async () => {
        try {
          const bal = await library.getBalance(account);

          if (!stale) setBalance(bal);
        } catch (error) {
          if (!stale) setBalance(null);
        }
      };

      getBal();

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">Balance</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm  text-right text-gray-900">
          {balance === null
            ? "Error"
            : balance
            ? `Ξ${formatEther(balance)}`
            : ""}
        </p>
      </td>
    </tr>
  );
};

export default Balance;
