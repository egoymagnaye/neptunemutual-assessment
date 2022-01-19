import { useWeb3React } from "@web3-react/core";

const ChainID = () => {
  const { chainId } = useWeb3React();

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">Chain ID</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-right text-gray-900">{chainId}</p>
      </td>
    </tr>
  );
};

export default ChainID;
