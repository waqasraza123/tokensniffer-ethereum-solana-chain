import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_NODE_BASE_URL

// Function to fetch data from the server using an address of the token
export async function fetchDataByAddressAndChainId(address, chaindId) {
    console.log("chain id is here " + chaindId)
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/search?q=${address}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data for address ${address}: ${error.message}`);
  }
}