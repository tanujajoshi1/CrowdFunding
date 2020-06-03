import web3 from './web3';
import CampaignFactory from '../build/contracts/CampaignFactory.json';

const instance=new web3.eth.Contract(

CampaignFactory.abi, "0xA2320ca849becE184AfC26A86bc6DE6a5181c986"
);

export default instance;
