import React from "react";
import Account from "./account/Account";
import Balance from "./balance/Balance";
import ChainID from "./chain-id/ChainID";

const WalletDetails = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200 my-5">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Key
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Value
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <Account />
        <ChainID />
        <Balance />
      </tbody>
    </table>
  );
};

export default WalletDetails;
