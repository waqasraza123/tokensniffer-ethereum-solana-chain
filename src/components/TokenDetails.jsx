import React, { useEffect, useState } from 'react';
import { getPairsByTokenAddresses } from '../libs/DexScreener';

function TokenDetails({ tokenAddress }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchTokenDetails = async () => {
            try {

                //get the data by calling dex api
                const pairsResponse = await getPairsByTokenAddresses([tokenAddress]);

                //parse the data
                if (pairsResponse && pairsResponse.pairs && pairsResponse.pairs.length > 0) {
                    const pair = pairsResponse.pairs[0];
                    console.log(pair)
                    setDetails({
                        baseToken: pair.baseToken.name,
                        baseTokenSymbol: pair.baseToken.symbol,
                        quoteToken: pair.quoteToken.symbol,
                        priceUsd: pair.priceUsd,
                        txns: pair.txns,
                        volume: pair.volume,
                        priceChange: pair.priceChange,
                        liquidity: pair.liquidity,
                        fdv: pair.fdv,
                        pairCreatedAt: pair.pairCreatedAt,
                        imageUrl: pair.info?.imageUrl,
                        websites: pair.info?.websites,
                        socials: pair.info?.socials
                    });
                } else {
                    console.error('No pairs found for the token address:', tokenAddress);
                }
            } catch (error) {
                console.error('Error fetching token details:', error);
            }
        };

        if (tokenAddress) {
            fetchTokenDetails();
        }
    }, [tokenAddress]);

    return (
        <div className="flex flex-col items-center justify-center">
            {details ? (
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4 mt-4">Token Details</h2>
                    <p><strong>Base Token:</strong> {details.baseToken}</p>
                    <p><strong>Base Token Symbol:</strong> {details.baseTokenSymbol}</p>
                    <p><strong>Quote Token:</strong> {details.quoteToken}</p>
                    <p><strong>Price USD:</strong> {details.priceUsd}</p>
                    <p><strong>Transactions (Last 24 hours):</strong> Buys - {details.txns.h24.buys}, Sells - {details.txns.h24.sells}</p>
                    <p><strong>Volume (Last 24 hours):</strong> {details.volume.h24}</p>
                    <p><strong>Price Change (Last 24 hours):</strong> {details.priceChange.h24}%</p>
                    <p><strong>Liquidity (USD):</strong> {details.liquidity.usd}</p>
                    <p><strong>FDV:</strong> {details.fdv}</p>
                    <p><strong>Pair Created At:</strong> {new Date(details.pairCreatedAt).toLocaleString()}</p>
                    { details.imageUrl && <img src={details.imageUrl} alt="Token" className="mt-4 m-auto" /> }
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Websites</h3>
                        <ul className="list-disc list-inside">
                            {details.websites?.map((website, index) => (
                                <li key={index}>
                                    <a href={website.url}>{website.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Socials</h3>
                        <ul className="list-disc list-inside">
                            {details.socials?.map((social, index) => (
                                <li key={index}>
                                    <a href={social.url}>{social.type}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading token details...</p>
            )}
        </div>
    );
}

export default TokenDetails;