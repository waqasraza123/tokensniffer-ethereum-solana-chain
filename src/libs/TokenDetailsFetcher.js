// TokenDetailsFetcher.js
import Web3 from 'web3';

const fetchTokenDetails = async (tokenAddress, onTokenDetailsFetched) => {
  try {
    const web3 = new Web3(process.env.REACT_APP_INFURA_URL);
    
    // Define ERC-20 ABI
    const erc20Abi = [
      // ERC-20 standard functions
      // Define your ERC-20 functions here
    ];

    // Create a contract instance
    const tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);
    
    // Fetch token details
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const decimals = await tokenContract.methods.decimals().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();
    const balance = await tokenContract.methods.balanceOf(tokenAddress).call();

    // Convert total supply and balance to human-readable format
    const totalSupplyFormatted = web3.utils.fromWei(totalSupply, 'ether');
    const balanceFormatted = web3.utils.fromWei(balance, 'ether');

    // Fetching deployment date - Not possible directly with web3.js
    const deploymentDate = 'YYYY-MM-DD'; // Set the deployment date manually or retrieve it from another source

    // Creating Etherscan link
    const etherscanLink = `https://etherscan.io/address/${tokenAddress}`;

    // Pass all details to the callback function
    onTokenDetailsFetched({
      name,
      symbol,
      decimals,
      totalSupply: totalSupplyFormatted,
      balance: balanceFormatted,
      deploymentDate,
      etherscanLink
    });
  } catch (error) {
    console.error('Error fetching token details:', error);
  }
};

export default fetchTokenDetails;