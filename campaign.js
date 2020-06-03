import web3 from './contracts/web3';
import Campaign from './build/contracts/Campaign.json';

const { abi } = Campaign;
export default (address) => {
    return new web3.eth.Contract(abi, address);
}