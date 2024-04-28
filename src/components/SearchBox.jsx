import React, { useState } from 'react';
import { getPairsByTokenAddresses } from '../libs/DexScreener';

function SearchBox({ onTokenAddressChanged }) {
  //store token address
  const [tokenAddress, setTokenAddress] = useState('');

  const handleKeyPress = async (event) => {

    if (event.key === 'Enter') {
      event.preventDefault();

      //pass the token address to the parent
      onTokenAddressChanged(tokenAddress);

    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <label htmlFor="search" className="text-lg mb-2 text-gray-800">Search Token Address:</label>
      <input
        id="search"
        className="border border-gray-300 rounded-md w-2/5 px-3 py-2 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        type="search"
        placeholder="Enter token address..."
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default SearchBox;