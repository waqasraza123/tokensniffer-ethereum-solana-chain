import React, { useState } from 'react';
import { fetchDataByAddress } from '../src/libs/APIs';
import SearchBox from '../src/components/SearchBox';
import TokenDetails from '../src/components/TokenDetails';
import TokenAnalysis from './components/TokenAnalysis';

function App() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenInfo, setTokenInfo] = useState();

  // Function to handle the Analysis button click event
  const handleAnalysisClick = async () => {
    try {
      const data = await fetchDataByAddress(tokenAddress);
      setTokenInfo(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle the token address change
  const handleTokenAddressChange = (address) => {
    setTokenAddress(address);
  };

  return (
    <div className="App">
      <header className="App-header">

        {/* SearchBox component with onTokenAddressChanged prop */}
        <SearchBox onTokenAddressChanged={handleTokenAddressChange} />

        <div className='flex'>
          <TokenDetails className='col-1/2' tokenAddress={tokenAddress} />
          <div className='col-1/2'>
            
            {/* Analysis button with onClick event handler */}
            { tokenInfo && <TokenAnalysis tokenInfo = {tokenInfo} /> }
            <button 
              className='px-4 py-2 bg-blue-500 text-white mt-4'
              onClick={handleAnalysisClick}
            >
              Analysis
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;