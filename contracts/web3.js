import Web3 from 'web3';
let web3;
if(typeof window!=='undefined' && typeof window.web3!=='undefined'){
    web3= new Web3(window.web3.currentProvider);
}
else{
    const provider=new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/526706ceeed54d7bb242879ec3033c18");
    web3=new Web3(provider);
}

export default web3;