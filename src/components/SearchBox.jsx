import React, { useState } from 'react';
import { getPairsByTokenAddresses } from '../libs/DexScreener';

function SearchBox({ onTokenAddressChanged, onChainIdUpdate }) {
    //store token address
    const [tokenAddress, setTokenAddress] = useState('');
    const [chainId, setChainId] = useState('solana')

    const searchButtonClicked = async (event) => {

        onTokenAddressChanged(tokenAddress);
    };


    function handleChainIdUpdate(chainId) {
        setChainId(chainId);

        onChainIdUpdate(chainId);
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <label htmlFor="search" className="text-lg mb-2 text-gray-800">Search Token Address:</label>

            <select
                value={chainId}
                onChange={(e) => handleChainIdUpdate(e.target.value)}
                className="block w-full px-4 py-2 bg-white border w-1/6 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
            >
                <option value="ethereum">Ethereum</option>
                <option value="solana">Solana</option>
            </select>


            <input
                id="search"
                className="border border-gray-300 rounded-md w-2/5 px-3 py-2 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                type="search"
                placeholder="Enter token address..."
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
            />

            <button onClick={searchButtonClicked} className="bg-blue-500 text-white px-3 py-1 rounded ml-2 mt-4">
                Search
            </button>
        </div>
    );
}

export default SearchBox;