import React from 'react';

function TokenAnalysis({ tokenInfo }) {
    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{tokenInfo.tokenName}</h2>
            <p className="text-gray-600 mb-2"><strong>Sniff Score:</strong> {tokenInfo.snifScore}</p>
            <p className="text-gray-600 mb-2"><strong>Token Address:</strong> {tokenInfo.tokenAddress}</p>
            <p className="text-gray-600 mb-4"><strong>Token Price:</strong> {tokenInfo.tokenPrice}</p>
            <h3 className="text-xl font-semibold mb-2">Risk Info</h3>
            <ul>
                {tokenInfo.riskInfo.map((risk, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <img src={risk.imgSrc} width={25} height={25} className="mr-2" alt="Risk Icon" />
                        <span className="text-gray-800">{risk.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TokenAnalysis;