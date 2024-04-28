import axios from 'axios';

const BASE_URL = process.env.REACT_APP_DEXSCREENER_BASE_URL;

export async function getPairsByTokenAddresses(tokenAddresses) {
  try {
    const response = await axios.get(`${BASE_URL}/${tokenAddresses.join(',')}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pairs by token addresses:', error);
    return null;
  }
}