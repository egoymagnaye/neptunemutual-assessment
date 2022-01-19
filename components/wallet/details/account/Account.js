import { useWeb3React } from "@web3-react/core";

const Account = () => {
  const { account } = useWeb3React();

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">Account</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-right text-gray-900">
          {account === null
            ? "-"
            : account
            ? `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`
            : ""}
        </p>
      </td>
    </tr>
  );
};

export default Account;
