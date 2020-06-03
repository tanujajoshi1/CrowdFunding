module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/contracts/Campaign.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"Campaign","abi":[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requests","outputs":[{"name":"description","type":"string"},{"name":"value","type":"uint256"},{"name":"recipient","type":"address"},{"name":"complete","type":"bool"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"approversCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"minvalue","type":"uint256"},{"name":"creator","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"description","type":"string"},{"name":"value","type":"uint256"},{"name":"recipient","type":"address"}],"name":"createRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"approveRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"finalize","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getSummary","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRequestsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.1+commit.c8a2cb62\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"finalize\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getRequestsCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"requests\",\"outputs\":[{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"value\",\"type\":\"uint256\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"complete\",\"type\":\"bool\"},{\"name\":\"voteCount\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"approversCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"value\",\"type\":\"uint256\"},{\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"createRequest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"contribute\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"approveRequest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"minvalue\",\"type\":\"uint256\"},{\"name\":\"creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/tanuja/Documents/ETHEREUM/StartUp/contracts/CampaignFactory.sol\":\"Campaign\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/tanuja/Documents/ETHEREUM/StartUp/contracts/CampaignFactory.sol\":{\"keccak256\":\"0x7a0f077a011fa0f9aa7affc43d2724df9e240cb5b18f8011d273427606b79413\",\"urls\":[\"bzzr://7d67c2d3220d61dd3c17db917b7552842c41554b1dec27726f0d12ec4c451ee8\"]}},\"version\":1}","bytecode":"0x6080604052600060035534801561001557600080fd5b50604051604080610ca18339810180604052604081101561003557600080fd5b81019080805190602001909291908051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055505050610bf8806100a96000396000f3fe608060405260043610610093576000357c01000000000000000000000000000000000000000000000000000000009004806305261aea146100985780633410452a146100c65780634051ddac146100f1578063481c6a751461016457806381d12c58146101bb57806382fde093146102bb5780638a9cfd55146102e6578063d7bb99ba146103d8578063d7d1bbdb146103e2575b600080fd5b6100c4600480360360208110156100ae57600080fd5b810190808035906020019092919050505061041d565b005b3480156100d257600080fd5b506100db6105d2565b6040518082815260200191505060405180910390f35b3480156100fd57600080fd5b506101066105de565b604051808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390f35b34801561017057600080fd5b5061017961063e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c757600080fd5b506101f4600480360360208110156101de57600080fd5b8101908080359060200190929190505050610664565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156102c757600080fd5b506102d061076e565b6040518082815260200191505060405180910390f35b3480156102f257600080fd5b506103d66004803603606081101561030957600080fd5b810190808035906020019064010000000081111561032657600080fd5b82018360208201111561033857600080fd5b8035906020019184600183028401116401000000008311171561035a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610774565b005b6103e06108eb565b005b3480156103ee57600080fd5b5061041b6004803603602081101561040557600080fd5b8101908080359060200190929190505050610967565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561047957600080fd5b60008181548110151561048857fe5b906000526020600020906005020160020160149054906101000a900460ff161515156104b357600080fd5b60026003548115156104c157fe5b046000828154811015156104d157fe5b9060005260206000209060050201600301541115156104ef57600080fd5b6000818154811015156104fe57fe5b906000526020600020906005020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60008381548110151561055857fe5b9060005260206000209060050201600101549081150290604051600060405180830381858888f19350505050158015610595573d6000803e3d6000fd5b5060016000828154811015156105a757fe5b906000526020600020906005020160020160146101000a81548160ff02191690831515021790555050565b60008080549050905090565b60008060008060006002543073ffffffffffffffffffffffffffffffffffffffff1631600080549050600354600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094509091929394565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008181548110151561067357fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561071f5780601f106106f45761010080835404028352916020019161071f565b820191906000526020600020905b81548152906001019060200180831161070257829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107d057600080fd5b6107d8610adf565b60a0604051908101604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200160008152509050600081908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000019080519060200190610866929190610b27565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff0219169083151502179055506080820151816003015550505050505050565b600254341115156108fb57600080fd5b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600360008154809291906001019190505550565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109bf57600080fd5b6000818154811015156109ce57fe5b906000526020600020906005020160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610a3657600080fd5b6001600082815481101515610a4757fe5b906000526020600020906005020160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600081815481101515610abb57fe5b90600052602060002090600502016003016000815480929190600101919050555050565b60a0604051908101604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b6857805160ff1916838001178555610b96565b82800160010185558215610b96579182015b82811115610b95578251825591602001919060010190610b7a565b5b509050610ba39190610ba7565b5090565b610bc991905b80821115610bc5576000816000905550600101610bad565b5090565b9056fea165627a7a72305820cd9e78ad19b6d7862806bf9daa542b002fd92a4869a842fcc489828c8dff67900029","deployedBytecode":"0x608060405260043610610093576000357c01000000000000000000000000000000000000000000000000000000009004806305261aea146100985780633410452a146100c65780634051ddac146100f1578063481c6a751461016457806381d12c58146101bb57806382fde093146102bb5780638a9cfd55146102e6578063d7bb99ba146103d8578063d7d1bbdb146103e2575b600080fd5b6100c4600480360360208110156100ae57600080fd5b810190808035906020019092919050505061041d565b005b3480156100d257600080fd5b506100db6105d2565b6040518082815260200191505060405180910390f35b3480156100fd57600080fd5b506101066105de565b604051808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390f35b34801561017057600080fd5b5061017961063e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c757600080fd5b506101f4600480360360208110156101de57600080fd5b8101908080359060200190929190505050610664565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156102c757600080fd5b506102d061076e565b6040518082815260200191505060405180910390f35b3480156102f257600080fd5b506103d66004803603606081101561030957600080fd5b810190808035906020019064010000000081111561032657600080fd5b82018360208201111561033857600080fd5b8035906020019184600183028401116401000000008311171561035a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610774565b005b6103e06108eb565b005b3480156103ee57600080fd5b5061041b6004803603602081101561040557600080fd5b8101908080359060200190929190505050610967565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561047957600080fd5b60008181548110151561048857fe5b906000526020600020906005020160020160149054906101000a900460ff161515156104b357600080fd5b60026003548115156104c157fe5b046000828154811015156104d157fe5b9060005260206000209060050201600301541115156104ef57600080fd5b6000818154811015156104fe57fe5b906000526020600020906005020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60008381548110151561055857fe5b9060005260206000209060050201600101549081150290604051600060405180830381858888f19350505050158015610595573d6000803e3d6000fd5b5060016000828154811015156105a757fe5b906000526020600020906005020160020160146101000a81548160ff02191690831515021790555050565b60008080549050905090565b60008060008060006002543073ffffffffffffffffffffffffffffffffffffffff1631600080549050600354600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094509091929394565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008181548110151561067357fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561071f5780601f106106f45761010080835404028352916020019161071f565b820191906000526020600020905b81548152906001019060200180831161070257829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107d057600080fd5b6107d8610adf565b60a0604051908101604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200160008152509050600081908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000019080519060200190610866929190610b27565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff0219169083151502179055506080820151816003015550505050505050565b600254341115156108fb57600080fd5b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600360008154809291906001019190505550565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109bf57600080fd5b6000818154811015156109ce57fe5b906000526020600020906005020160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610a3657600080fd5b6001600082815481101515610a4757fe5b906000526020600020906005020160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600081815481101515610abb57fe5b90600052602060002090600502016003016000815480929190600101919050555050565b60a0604051908101604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b6857805160ff1916838001178555610b96565b82800160010185558215610b96579182015b82811115610b95578251825591602001919060010190610b7a565b5b509050610ba39190610ba7565b5090565b610bc991905b80821115610bc5576000816000905550600101610bad565b5090565b9056fea165627a7a72305820cd9e78ad19b6d7862806bf9daa542b002fd92a4869a842fcc489828c8dff67900029","sourceMap":"388:2102:0:-;;;740:1;708:33;;876:159;8:9:-1;5:2;;;30:1;27;20:12;5:2;876:159:0;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;876:159:0;;;;;;;;;;;;;;;;;;;;;;;;;981:7;971;;:17;;;;;;;;;;;;;;;;;;1020:8;998:19;:30;;;;876:159;;388:2102;;;;;;","deployedSourceMap":"388:2102:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1830:286;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1830:286:0;;;;;;;;;;;;;;;;;:::i;:::-;;2394:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2394:94:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2122:266;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2122:266:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;647:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;647:22:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;616:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;616:25:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;616:25:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;616:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;708:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;708:33:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1205:379;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1205:379:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1205:379:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1205:379:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1205:379:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1205:379:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1205:379:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1041:158;;;:::i;:::-;;1590:234;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1590:234:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1590:234:0;;;;;;;;;;;;;;;;;:::i;:::-;;1830:286;844:7;;;;;;;;;;;830:21;;:10;:21;;;822:30;;;;;;;;1909:8;1918:5;1909:15;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;1908:25;1900:34;;;;;;;;1998:1;1981:14;;:18;;;;;;;;1952:8;1961:5;1952:15;;;;;;;;;;;;;;;;;;;;:25;;;:48;1944:57;;;;;;;;2011:8;2020:5;2011:15;;;;;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;:34;;:57;2046:8;2055:5;2046:15;;;;;;;;;;;;;;;;;;;;:21;;;2011:57;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2011:57:0;2105:4;2078:8;2087:5;2078:15;;;;;;;;;;;;;;;;;;;;:24;;;:31;;;;;;;;;;;;;;;;;;1830:286;:::o;2394:94::-;2443:7;2466:8;:15;;;;2459:22;;2394:94;:::o;2122:266::-;2164:7;2173;2182;2191;2200;2239:19;;2280:4;2272:21;;;2307:8;:15;;;;2336:14;;2364:7;;;;;;;;;;;2218:163;;;;;;;;;;2122:266;;;;;:::o;647:22::-;;;;;;;;;;;;;:::o;616:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;708:33::-;;;;:::o;1205:379::-;844:7;;;;;;;;;;;830:21;;:10;:21;;;822:30;;;;;;;;1356:18;;:::i;:::-;1377:172;;;;;;;;;1412:11;1377:172;;;;1444:5;1377:172;;;;1474:9;1377:172;;;;;;1507:5;1377:172;;;;;;1537:1;1377:172;;;1356:193;;1559:8;1573:3;1559:18;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1559:18:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;862:1;1205:379;;;:::o;1041:158::-;1108:19;;1096:9;:31;1088:40;;;;;;;;1162:4;1138:9;:21;1148:10;1138:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;1176:14;;:16;;;;;;;;;;;;;1041:158::o;1590:234::-;1654:9;:21;1664:10;1654:21;;;;;;;;;;;;;;;;;;;;;;;;;1646:30;;;;;;;;1695:8;1704:5;1695:15;;;;;;;;;;;;;;;;;;;;:21;;:33;1717:10;1695:33;;;;;;;;;;;;;;;;;;;;;;;;;1694:34;1686:43;;;;;;;;1776:4;1740:8;1749:5;1740:15;;;;;;;;;;;;;;;;;;;;:21;;:33;1762:10;1740:33;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1790:8;1799:5;1790:15;;;;;;;;;;;;;;;;;;;;:25;;;:27;;;;;;;;;;;;;1590:234;:::o;388:2102::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity >=0.5.0 <0.7.0;\n\n\ncontract CampaignFactory {\n    address[] public depdCampaignAdd;\n\n    function createCampaign(uint256 minimum) public {\n        address newCampaign = address(new Campaign(minimum, msg.sender));\n        depdCampaignAdd.push(newCampaign);\n    }\n\n    function getCampaign() public view returns (address[] memory) {\n        return depdCampaignAdd;\n    }\n}\n\n\ncontract Campaign {\n    struct Request {\n        string description;\n        uint256 value;\n        address payable recipient;\n        bool complete;\n        uint256 voteCount;\n        mapping(address => bool) votes;\n    }\n\n    Request[] public requests;\n    address public manager;\n    uint256 minimumcontribution;\n    uint256 public approversCount = 0;\n\n    mapping(address => bool) approvers;\n\n    modifier onlyManager() {\n        require(msg.sender == manager);\n        _;\n    }\n\n    constructor(uint256 minvalue, address creator) public {\n        //constructor Campaign\n        manager = creator;\n        minimumcontribution = minvalue;\n    }\n\n    function contribute() public payable {\n        require(msg.value > minimumcontribution);\n        approvers[msg.sender] = true;\n        approversCount++;\n    }\n\n    function createRequest(\n        string memory description,\n        uint256 value,\n        address payable recipient\n    ) public onlyManager {\n        Request memory obj = Request({\n            description: description,\n            value: value,\n            recipient: recipient,\n            complete: false,\n            voteCount: 0\n        });\n        requests.push(obj);\n    }\n\n    function approveRequest(uint256 index) public {\n        require(approvers[msg.sender]);\n        require(!requests[index].votes[msg.sender]);\n\n        requests[index].votes[msg.sender] = true;\n        requests[index].voteCount++;\n    }\n\n    function finalize(uint256 index) public payable onlyManager {\n        require(!requests[index].complete);\n        require(requests[index].voteCount > (approversCount / 2));\n        requests[index].recipient.transfer(requests[index].value);\n        requests[index].complete = true;\n    }\n\n    function getSummary()public view returns (uint256, uint256, uint256, uint256, address){\n        return (\n            minimumcontribution,\n            address(this).balance,\n            requests.length,\n            approversCount,\n            manager\n        );\n    }\n\n    function getRequestsCount() public view returns (uint256) {\n     return requests.length;\n    }\n}\n","sourcePath":"/home/tanuja/Documents/ETHEREUM/StartUp/contracts/CampaignFactory.sol","ast":{"absolutePath":"/home/tanuja/Documents/ETHEREUM/StartUp/contracts/CampaignFactory.sol","exportedSymbols":{"Campaign":[263],"CampaignFactory":[37]},"id":264,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.5",".0","<","0.7",".0"],"nodeType":"PragmaDirective","src":"0:31:0"},{"baseContracts":[],"contractDependencies":[263],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":37,"linearizedBaseContracts":[37],"name":"CampaignFactory","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":4,"name":"depdCampaignAdd","nodeType":"VariableDeclaration","scope":37,"src":"65:32:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"65:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":3,"length":null,"nodeType":"ArrayTypeName","src":"65:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"body":{"id":26,"nodeType":"Block","src":"152:124:0","statements":[{"assignments":[10],"declarations":[{"constant":false,"id":10,"name":"newCampaign","nodeType":"VariableDeclaration","scope":26,"src":"162:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":9,"name":"address","nodeType":"ElementaryTypeName","src":"162:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":19,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":14,"name":"minimum","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"205:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":15,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"214:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":16,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"214:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":13,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"192:12:0","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_uint256_$_t_address_$returns$_t_contract$_Campaign_$263_$","typeString":"function (uint256,address) returns (contract Campaign)"},"typeName":{"contractScope":null,"id":12,"name":"Campaign","nodeType":"UserDefinedTypeName","referencedDeclaration":263,"src":"196:8:0","typeDescriptions":{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}}},"id":17,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"192:33:0","typeDescriptions":{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}],"id":11,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"184:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":18,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"184:42:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"162:64:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":23,"name":"newCampaign","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":10,"src":"257:11:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":20,"name":"depdCampaignAdd","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"236:15:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":22,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"236:20:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":24,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"236:33:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":25,"nodeType":"ExpressionStatement","src":"236:33:0"}]},"documentation":null,"id":27,"implemented":true,"kind":"function","modifiers":[],"name":"createCampaign","nodeType":"FunctionDefinition","parameters":{"id":7,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6,"name":"minimum","nodeType":"VariableDeclaration","scope":27,"src":"128:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5,"name":"uint256","nodeType":"ElementaryTypeName","src":"128:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"127:17:0"},"returnParameters":{"id":8,"nodeType":"ParameterList","parameters":[],"src":"152:0:0"},"scope":37,"src":"104:172:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":35,"nodeType":"Block","src":"344:39:0","statements":[{"expression":{"argumentTypes":null,"id":33,"name":"depdCampaignAdd","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"361:15:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":32,"id":34,"nodeType":"Return","src":"354:22:0"}]},"documentation":null,"id":36,"implemented":true,"kind":"function","modifiers":[],"name":"getCampaign","nodeType":"FunctionDefinition","parameters":{"id":28,"nodeType":"ParameterList","parameters":[],"src":"302:2:0"},"returnParameters":{"id":32,"nodeType":"ParameterList","parameters":[{"constant":false,"id":31,"name":"","nodeType":"VariableDeclaration","scope":36,"src":"326:16:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":29,"name":"address","nodeType":"ElementaryTypeName","src":"326:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":30,"length":null,"nodeType":"ArrayTypeName","src":"326:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"325:18:0"},"scope":37,"src":"282:101:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":264,"src":"34:351:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":263,"linearizedBaseContracts":[263],"name":"Campaign","nodeType":"ContractDefinition","nodes":[{"canonicalName":"Campaign.Request","id":52,"members":[{"constant":false,"id":39,"name":"description","nodeType":"VariableDeclaration","scope":52,"src":"437:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":38,"name":"string","nodeType":"ElementaryTypeName","src":"437:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":41,"name":"value","nodeType":"VariableDeclaration","scope":52,"src":"465:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":40,"name":"uint256","nodeType":"ElementaryTypeName","src":"465:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":43,"name":"recipient","nodeType":"VariableDeclaration","scope":52,"src":"488:25:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"typeName":{"id":42,"name":"address","nodeType":"ElementaryTypeName","src":"488:15:0","stateMutability":"payable","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"value":null,"visibility":"internal"},{"constant":false,"id":45,"name":"complete","nodeType":"VariableDeclaration","scope":52,"src":"523:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":44,"name":"bool","nodeType":"ElementaryTypeName","src":"523:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":47,"name":"voteCount","nodeType":"VariableDeclaration","scope":52,"src":"546:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":46,"name":"uint256","nodeType":"ElementaryTypeName","src":"546:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":51,"name":"votes","nodeType":"VariableDeclaration","scope":52,"src":"573:30:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":50,"keyType":{"id":48,"name":"address","nodeType":"ElementaryTypeName","src":"581:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"573:24:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":49,"name":"bool","nodeType":"ElementaryTypeName","src":"592:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"internal"}],"name":"Request","nodeType":"StructDefinition","scope":263,"src":"412:198:0","visibility":"public"},{"constant":false,"id":55,"name":"requests","nodeType":"VariableDeclaration","scope":263,"src":"616:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request[]"},"typeName":{"baseType":{"contractScope":null,"id":53,"name":"Request","nodeType":"UserDefinedTypeName","referencedDeclaration":52,"src":"616:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage_ptr","typeString":"struct Campaign.Request"}},"id":54,"length":null,"nodeType":"ArrayTypeName","src":"616:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage_ptr","typeString":"struct Campaign.Request[]"}},"value":null,"visibility":"public"},{"constant":false,"id":57,"name":"manager","nodeType":"VariableDeclaration","scope":263,"src":"647:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":56,"name":"address","nodeType":"ElementaryTypeName","src":"647:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":59,"name":"minimumcontribution","nodeType":"VariableDeclaration","scope":263,"src":"675:27:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint256","nodeType":"ElementaryTypeName","src":"675:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"approversCount","nodeType":"VariableDeclaration","scope":263,"src":"708:33:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint256","nodeType":"ElementaryTypeName","src":"708:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":61,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"740:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":66,"name":"approvers","nodeType":"VariableDeclaration","scope":263,"src":"748:34:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":65,"keyType":{"id":63,"name":"address","nodeType":"ElementaryTypeName","src":"756:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"748:24:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":64,"name":"bool","nodeType":"ElementaryTypeName","src":"767:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"internal"},{"body":{"id":76,"nodeType":"Block","src":"812:58:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":69,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"830:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"830:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":71,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"844:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"830:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":68,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"822:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":73,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"822:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":74,"nodeType":"ExpressionStatement","src":"822:30:0"},{"id":75,"nodeType":"PlaceholderStatement","src":"862:1:0"}]},"documentation":null,"id":77,"name":"onlyManager","nodeType":"ModifierDefinition","parameters":{"id":67,"nodeType":"ParameterList","parameters":[],"src":"809:2:0"},"src":"789:81:0","visibility":"internal"},{"body":{"id":92,"nodeType":"Block","src":"930:105:0","statements":[{"expression":{"argumentTypes":null,"id":86,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":84,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"971:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":85,"name":"creator","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":81,"src":"981:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"971:17:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":87,"nodeType":"ExpressionStatement","src":"971:17:0"},{"expression":{"argumentTypes":null,"id":90,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":88,"name":"minimumcontribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":59,"src":"998:19:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":89,"name":"minvalue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1020:8:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"998:30:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":91,"nodeType":"ExpressionStatement","src":"998:30:0"}]},"documentation":null,"id":93,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":82,"nodeType":"ParameterList","parameters":[{"constant":false,"id":79,"name":"minvalue","nodeType":"VariableDeclaration","scope":93,"src":"888:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":78,"name":"uint256","nodeType":"ElementaryTypeName","src":"888:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":81,"name":"creator","nodeType":"VariableDeclaration","scope":93,"src":"906:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":80,"name":"address","nodeType":"ElementaryTypeName","src":"906:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"887:35:0"},"returnParameters":{"id":83,"nodeType":"ParameterList","parameters":[],"src":"930:0:0"},"scope":263,"src":"876:159:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":113,"nodeType":"Block","src":"1078:121:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":100,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":97,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1096:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":98,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1096:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"id":99,"name":"minimumcontribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":59,"src":"1108:19:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1096:31:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":96,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1088:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1088:40:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":102,"nodeType":"ExpressionStatement","src":"1088:40:0"},{"expression":{"argumentTypes":null,"id":108,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":103,"name":"approvers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":66,"src":"1138:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":106,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":104,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1148:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":105,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1148:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1138:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":107,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1162:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1138:28:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":109,"nodeType":"ExpressionStatement","src":"1138:28:0"},{"expression":{"argumentTypes":null,"id":111,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1176:16:0","subExpression":{"argumentTypes":null,"id":110,"name":"approversCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"1176:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":112,"nodeType":"ExpressionStatement","src":"1176:16:0"}]},"documentation":null,"id":114,"implemented":true,"kind":"function","modifiers":[],"name":"contribute","nodeType":"FunctionDefinition","parameters":{"id":94,"nodeType":"ParameterList","parameters":[],"src":"1060:2:0"},"returnParameters":{"id":95,"nodeType":"ParameterList","parameters":[],"src":"1078:0:0"},"scope":263,"src":"1041:158:0","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":141,"nodeType":"Block","src":"1346:238:0","statements":[{"assignments":[126],"declarations":[{"constant":false,"id":126,"name":"obj","nodeType":"VariableDeclaration","scope":141,"src":"1356:18:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_memory_ptr","typeString":"struct Campaign.Request"},"typeName":{"contractScope":null,"id":125,"name":"Request","nodeType":"UserDefinedTypeName","referencedDeclaration":52,"src":"1356:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage_ptr","typeString":"struct Campaign.Request"}},"value":null,"visibility":"internal"}],"id":134,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":128,"name":"description","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"1412:11:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":129,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":118,"src":"1444:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":130,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":120,"src":"1474:9:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"hexValue":"66616c7365","id":131,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1507:5:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},{"argumentTypes":null,"hexValue":"30","id":132,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1537:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":null,"id":127,"name":"Request","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"1377:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Request_$52_storage_ptr_$","typeString":"type(struct Campaign.Request storage pointer)"}},"id":133,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["description","value","recipient","complete","voteCount"],"nodeType":"FunctionCall","src":"1377:172:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_memory","typeString":"struct Campaign.Request memory"}},"nodeType":"VariableDeclarationStatement","src":"1356:193:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":138,"name":"obj","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":126,"src":"1573:3:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_memory_ptr","typeString":"struct Campaign.Request memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Request_$52_memory_ptr","typeString":"struct Campaign.Request memory"}],"expression":{"argumentTypes":null,"id":135,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1559:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1559:13:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Request_$52_storage_$returns$_t_uint256_$","typeString":"function (struct Campaign.Request storage ref) returns (uint256)"}},"id":139,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1559:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":140,"nodeType":"ExpressionStatement","src":"1559:18:0"}]},"documentation":null,"id":142,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":123,"modifierName":{"argumentTypes":null,"id":122,"name":"onlyManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"1334:11:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1334:11:0"}],"name":"createRequest","nodeType":"FunctionDefinition","parameters":{"id":121,"nodeType":"ParameterList","parameters":[{"constant":false,"id":116,"name":"description","nodeType":"VariableDeclaration","scope":142,"src":"1237:25:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":115,"name":"string","nodeType":"ElementaryTypeName","src":"1237:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":118,"name":"value","nodeType":"VariableDeclaration","scope":142,"src":"1272:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":117,"name":"uint256","nodeType":"ElementaryTypeName","src":"1272:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":120,"name":"recipient","nodeType":"VariableDeclaration","scope":142,"src":"1295:25:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"typeName":{"id":119,"name":"address","nodeType":"ElementaryTypeName","src":"1295:15:0","stateMutability":"payable","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"value":null,"visibility":"internal"}],"src":"1227:99:0"},"returnParameters":{"id":124,"nodeType":"ParameterList","parameters":[],"src":"1346:0:0"},"scope":263,"src":"1205:379:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":181,"nodeType":"Block","src":"1636:188:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":148,"name":"approvers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":66,"src":"1654:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":151,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":149,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1664:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":150,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1664:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1654:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":147,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1646:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":152,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1646:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":153,"nodeType":"ExpressionStatement","src":"1646:30:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"1694:34:0","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":155,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1695:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":157,"indexExpression":{"argumentTypes":null,"id":156,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1704:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1695:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":158,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"votes","nodeType":"MemberAccess","referencedDeclaration":51,"src":"1695:21:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":161,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":159,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1717:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":160,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1717:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1695:33:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":154,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1686:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":163,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1686:43:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":164,"nodeType":"ExpressionStatement","src":"1686:43:0"},{"expression":{"argumentTypes":null,"id":173,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":165,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1740:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":167,"indexExpression":{"argumentTypes":null,"id":166,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1749:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1740:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":168,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"votes","nodeType":"MemberAccess","referencedDeclaration":51,"src":"1740:21:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":171,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":169,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1762:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":170,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1762:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1740:33:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":172,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1776:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1740:40:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":174,"nodeType":"ExpressionStatement","src":"1740:40:0"},{"expression":{"argumentTypes":null,"id":179,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1790:27:0","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":175,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1790:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":177,"indexExpression":{"argumentTypes":null,"id":176,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1799:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1790:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":178,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"voteCount","nodeType":"MemberAccess","referencedDeclaration":47,"src":"1790:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":180,"nodeType":"ExpressionStatement","src":"1790:27:0"}]},"documentation":null,"id":182,"implemented":true,"kind":"function","modifiers":[],"name":"approveRequest","nodeType":"FunctionDefinition","parameters":{"id":145,"nodeType":"ParameterList","parameters":[{"constant":false,"id":144,"name":"index","nodeType":"VariableDeclaration","scope":182,"src":"1614:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":143,"name":"uint256","nodeType":"ElementaryTypeName","src":"1614:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1613:15:0"},"returnParameters":{"id":146,"nodeType":"ParameterList","parameters":[],"src":"1636:0:0"},"scope":263,"src":"1590:234:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":227,"nodeType":"Block","src":"1890:226:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":194,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"1908:25:0","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":190,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1909:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":192,"indexExpression":{"argumentTypes":null,"id":191,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1918:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1909:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":193,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"complete","nodeType":"MemberAccess","referencedDeclaration":45,"src":"1909:24:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":189,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1900:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":195,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1900:34:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":196,"nodeType":"ExpressionStatement","src":"1900:34:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":206,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":198,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1952:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":200,"indexExpression":{"argumentTypes":null,"id":199,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1961:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1952:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":201,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voteCount","nodeType":"MemberAccess","referencedDeclaration":47,"src":"1952:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":204,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":202,"name":"approversCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"1981:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"/","rightExpression":{"argumentTypes":null,"hexValue":"32","id":203,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1998:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"},"src":"1981:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":205,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1980:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1952:48:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":197,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1944:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":207,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1944:57:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":208,"nodeType":"ExpressionStatement","src":"1944:57:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":214,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2046:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":216,"indexExpression":{"argumentTypes":null,"id":215,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"2055:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2046:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":217,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":41,"src":"2046:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":209,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2011:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":211,"indexExpression":{"argumentTypes":null,"id":210,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"2020:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2011:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":212,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"recipient","nodeType":"MemberAccess","referencedDeclaration":43,"src":"2011:25:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"id":213,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2011:34:0","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":218,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2011:57:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":219,"nodeType":"ExpressionStatement","src":"2011:57:0"},{"expression":{"argumentTypes":null,"id":225,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":220,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2078:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":222,"indexExpression":{"argumentTypes":null,"id":221,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"2087:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2078:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":223,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"complete","nodeType":"MemberAccess","referencedDeclaration":45,"src":"2078:24:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":224,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2105:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2078:31:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":226,"nodeType":"ExpressionStatement","src":"2078:31:0"}]},"documentation":null,"id":228,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":187,"modifierName":{"argumentTypes":null,"id":186,"name":"onlyManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"1878:11:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1878:11:0"}],"name":"finalize","nodeType":"FunctionDefinition","parameters":{"id":185,"nodeType":"ParameterList","parameters":[{"constant":false,"id":184,"name":"index","nodeType":"VariableDeclaration","scope":228,"src":"1848:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":183,"name":"uint256","nodeType":"ElementaryTypeName","src":"1848:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1847:15:0"},"returnParameters":{"id":188,"nodeType":"ParameterList","parameters":[],"src":"1890:0:0"},"scope":263,"src":"1830:286:0","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":252,"nodeType":"Block","src":"2208:180:0","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"id":241,"name":"minimumcontribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":59,"src":"2239:19:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":243,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":330,"src":"2280:4:0","typeDescriptions":{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}],"id":242,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2272:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":244,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2272:13:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":245,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2272:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":246,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2307:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":247,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2307:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":248,"name":"approversCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"2336:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":249,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"2364:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"id":250,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"2225:156:0","typeDescriptions":{"typeIdentifier":"t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$","typeString":"tuple(uint256,uint256,uint256,uint256,address)"}},"functionReturnParameters":240,"id":251,"nodeType":"Return","src":"2218:163:0"}]},"documentation":null,"id":253,"implemented":true,"kind":"function","modifiers":[],"name":"getSummary","nodeType":"FunctionDefinition","parameters":{"id":229,"nodeType":"ParameterList","parameters":[],"src":"2141:2:0"},"returnParameters":{"id":240,"nodeType":"ParameterList","parameters":[{"constant":false,"id":231,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2164:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":230,"name":"uint256","nodeType":"ElementaryTypeName","src":"2164:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":233,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2173:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":232,"name":"uint256","nodeType":"ElementaryTypeName","src":"2173:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":235,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2182:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":234,"name":"uint256","nodeType":"ElementaryTypeName","src":"2182:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":237,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2191:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":236,"name":"uint256","nodeType":"ElementaryTypeName","src":"2191:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":239,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2200:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":238,"name":"address","nodeType":"ElementaryTypeName","src":"2200:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2163:45:0"},"scope":263,"src":"2122:266:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":261,"nodeType":"Block","src":"2452:36:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":258,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2466:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":259,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2466:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":257,"id":260,"nodeType":"Return","src":"2459:22:0"}]},"documentation":null,"id":262,"implemented":true,"kind":"function","modifiers":[],"name":"getRequestsCount","nodeType":"FunctionDefinition","parameters":{"id":254,"nodeType":"ParameterList","parameters":[],"src":"2419:2:0"},"returnParameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":256,"name":"","nodeType":"VariableDeclaration","scope":262,"src":"2443:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":255,"name":"uint256","nodeType":"ElementaryTypeName","src":"2443:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2442:9:0"},"scope":263,"src":"2394:94:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":264,"src":"388:2102:0"}],"src":"0:2491:0"},"legacyAST":{"absolutePath":"/home/tanuja/Documents/ETHEREUM/StartUp/contracts/CampaignFactory.sol","exportedSymbols":{"Campaign":[263],"CampaignFactory":[37]},"id":264,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.5",".0","<","0.7",".0"],"nodeType":"PragmaDirective","src":"0:31:0"},{"baseContracts":[],"contractDependencies":[263],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":37,"linearizedBaseContracts":[37],"name":"CampaignFactory","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":4,"name":"depdCampaignAdd","nodeType":"VariableDeclaration","scope":37,"src":"65:32:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"65:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":3,"length":null,"nodeType":"ArrayTypeName","src":"65:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"body":{"id":26,"nodeType":"Block","src":"152:124:0","statements":[{"assignments":[10],"declarations":[{"constant":false,"id":10,"name":"newCampaign","nodeType":"VariableDeclaration","scope":26,"src":"162:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":9,"name":"address","nodeType":"ElementaryTypeName","src":"162:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":19,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":14,"name":"minimum","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"205:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":15,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"214:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":16,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"214:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":13,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"192:12:0","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_uint256_$_t_address_$returns$_t_contract$_Campaign_$263_$","typeString":"function (uint256,address) returns (contract Campaign)"},"typeName":{"contractScope":null,"id":12,"name":"Campaign","nodeType":"UserDefinedTypeName","referencedDeclaration":263,"src":"196:8:0","typeDescriptions":{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}}},"id":17,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"192:33:0","typeDescriptions":{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}],"id":11,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"184:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":18,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"184:42:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"162:64:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":23,"name":"newCampaign","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":10,"src":"257:11:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":20,"name":"depdCampaignAdd","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"236:15:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":22,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"236:20:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":24,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"236:33:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":25,"nodeType":"ExpressionStatement","src":"236:33:0"}]},"documentation":null,"id":27,"implemented":true,"kind":"function","modifiers":[],"name":"createCampaign","nodeType":"FunctionDefinition","parameters":{"id":7,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6,"name":"minimum","nodeType":"VariableDeclaration","scope":27,"src":"128:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5,"name":"uint256","nodeType":"ElementaryTypeName","src":"128:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"127:17:0"},"returnParameters":{"id":8,"nodeType":"ParameterList","parameters":[],"src":"152:0:0"},"scope":37,"src":"104:172:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":35,"nodeType":"Block","src":"344:39:0","statements":[{"expression":{"argumentTypes":null,"id":33,"name":"depdCampaignAdd","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"361:15:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":32,"id":34,"nodeType":"Return","src":"354:22:0"}]},"documentation":null,"id":36,"implemented":true,"kind":"function","modifiers":[],"name":"getCampaign","nodeType":"FunctionDefinition","parameters":{"id":28,"nodeType":"ParameterList","parameters":[],"src":"302:2:0"},"returnParameters":{"id":32,"nodeType":"ParameterList","parameters":[{"constant":false,"id":31,"name":"","nodeType":"VariableDeclaration","scope":36,"src":"326:16:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":29,"name":"address","nodeType":"ElementaryTypeName","src":"326:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":30,"length":null,"nodeType":"ArrayTypeName","src":"326:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"325:18:0"},"scope":37,"src":"282:101:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":264,"src":"34:351:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":263,"linearizedBaseContracts":[263],"name":"Campaign","nodeType":"ContractDefinition","nodes":[{"canonicalName":"Campaign.Request","id":52,"members":[{"constant":false,"id":39,"name":"description","nodeType":"VariableDeclaration","scope":52,"src":"437:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":38,"name":"string","nodeType":"ElementaryTypeName","src":"437:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":41,"name":"value","nodeType":"VariableDeclaration","scope":52,"src":"465:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":40,"name":"uint256","nodeType":"ElementaryTypeName","src":"465:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":43,"name":"recipient","nodeType":"VariableDeclaration","scope":52,"src":"488:25:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"typeName":{"id":42,"name":"address","nodeType":"ElementaryTypeName","src":"488:15:0","stateMutability":"payable","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"value":null,"visibility":"internal"},{"constant":false,"id":45,"name":"complete","nodeType":"VariableDeclaration","scope":52,"src":"523:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":44,"name":"bool","nodeType":"ElementaryTypeName","src":"523:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":47,"name":"voteCount","nodeType":"VariableDeclaration","scope":52,"src":"546:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":46,"name":"uint256","nodeType":"ElementaryTypeName","src":"546:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":51,"name":"votes","nodeType":"VariableDeclaration","scope":52,"src":"573:30:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":50,"keyType":{"id":48,"name":"address","nodeType":"ElementaryTypeName","src":"581:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"573:24:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":49,"name":"bool","nodeType":"ElementaryTypeName","src":"592:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"internal"}],"name":"Request","nodeType":"StructDefinition","scope":263,"src":"412:198:0","visibility":"public"},{"constant":false,"id":55,"name":"requests","nodeType":"VariableDeclaration","scope":263,"src":"616:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request[]"},"typeName":{"baseType":{"contractScope":null,"id":53,"name":"Request","nodeType":"UserDefinedTypeName","referencedDeclaration":52,"src":"616:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage_ptr","typeString":"struct Campaign.Request"}},"id":54,"length":null,"nodeType":"ArrayTypeName","src":"616:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage_ptr","typeString":"struct Campaign.Request[]"}},"value":null,"visibility":"public"},{"constant":false,"id":57,"name":"manager","nodeType":"VariableDeclaration","scope":263,"src":"647:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":56,"name":"address","nodeType":"ElementaryTypeName","src":"647:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":59,"name":"minimumcontribution","nodeType":"VariableDeclaration","scope":263,"src":"675:27:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint256","nodeType":"ElementaryTypeName","src":"675:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"approversCount","nodeType":"VariableDeclaration","scope":263,"src":"708:33:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint256","nodeType":"ElementaryTypeName","src":"708:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":61,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"740:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":66,"name":"approvers","nodeType":"VariableDeclaration","scope":263,"src":"748:34:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":65,"keyType":{"id":63,"name":"address","nodeType":"ElementaryTypeName","src":"756:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"748:24:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":64,"name":"bool","nodeType":"ElementaryTypeName","src":"767:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"internal"},{"body":{"id":76,"nodeType":"Block","src":"812:58:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":69,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"830:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"830:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":71,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"844:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"830:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":68,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"822:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":73,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"822:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":74,"nodeType":"ExpressionStatement","src":"822:30:0"},{"id":75,"nodeType":"PlaceholderStatement","src":"862:1:0"}]},"documentation":null,"id":77,"name":"onlyManager","nodeType":"ModifierDefinition","parameters":{"id":67,"nodeType":"ParameterList","parameters":[],"src":"809:2:0"},"src":"789:81:0","visibility":"internal"},{"body":{"id":92,"nodeType":"Block","src":"930:105:0","statements":[{"expression":{"argumentTypes":null,"id":86,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":84,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"971:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":85,"name":"creator","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":81,"src":"981:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"971:17:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":87,"nodeType":"ExpressionStatement","src":"971:17:0"},{"expression":{"argumentTypes":null,"id":90,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":88,"name":"minimumcontribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":59,"src":"998:19:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":89,"name":"minvalue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1020:8:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"998:30:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":91,"nodeType":"ExpressionStatement","src":"998:30:0"}]},"documentation":null,"id":93,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":82,"nodeType":"ParameterList","parameters":[{"constant":false,"id":79,"name":"minvalue","nodeType":"VariableDeclaration","scope":93,"src":"888:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":78,"name":"uint256","nodeType":"ElementaryTypeName","src":"888:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":81,"name":"creator","nodeType":"VariableDeclaration","scope":93,"src":"906:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":80,"name":"address","nodeType":"ElementaryTypeName","src":"906:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"887:35:0"},"returnParameters":{"id":83,"nodeType":"ParameterList","parameters":[],"src":"930:0:0"},"scope":263,"src":"876:159:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":113,"nodeType":"Block","src":"1078:121:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":100,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":97,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1096:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":98,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1096:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"id":99,"name":"minimumcontribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":59,"src":"1108:19:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1096:31:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":96,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1088:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1088:40:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":102,"nodeType":"ExpressionStatement","src":"1088:40:0"},{"expression":{"argumentTypes":null,"id":108,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":103,"name":"approvers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":66,"src":"1138:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":106,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":104,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1148:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":105,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1148:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1138:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":107,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1162:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1138:28:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":109,"nodeType":"ExpressionStatement","src":"1138:28:0"},{"expression":{"argumentTypes":null,"id":111,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1176:16:0","subExpression":{"argumentTypes":null,"id":110,"name":"approversCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"1176:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":112,"nodeType":"ExpressionStatement","src":"1176:16:0"}]},"documentation":null,"id":114,"implemented":true,"kind":"function","modifiers":[],"name":"contribute","nodeType":"FunctionDefinition","parameters":{"id":94,"nodeType":"ParameterList","parameters":[],"src":"1060:2:0"},"returnParameters":{"id":95,"nodeType":"ParameterList","parameters":[],"src":"1078:0:0"},"scope":263,"src":"1041:158:0","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":141,"nodeType":"Block","src":"1346:238:0","statements":[{"assignments":[126],"declarations":[{"constant":false,"id":126,"name":"obj","nodeType":"VariableDeclaration","scope":141,"src":"1356:18:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_memory_ptr","typeString":"struct Campaign.Request"},"typeName":{"contractScope":null,"id":125,"name":"Request","nodeType":"UserDefinedTypeName","referencedDeclaration":52,"src":"1356:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage_ptr","typeString":"struct Campaign.Request"}},"value":null,"visibility":"internal"}],"id":134,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":128,"name":"description","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"1412:11:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":129,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":118,"src":"1444:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":130,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":120,"src":"1474:9:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"hexValue":"66616c7365","id":131,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1507:5:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},{"argumentTypes":null,"hexValue":"30","id":132,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1537:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":null,"id":127,"name":"Request","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"1377:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Request_$52_storage_ptr_$","typeString":"type(struct Campaign.Request storage pointer)"}},"id":133,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["description","value","recipient","complete","voteCount"],"nodeType":"FunctionCall","src":"1377:172:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_memory","typeString":"struct Campaign.Request memory"}},"nodeType":"VariableDeclarationStatement","src":"1356:193:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":138,"name":"obj","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":126,"src":"1573:3:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_memory_ptr","typeString":"struct Campaign.Request memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Request_$52_memory_ptr","typeString":"struct Campaign.Request memory"}],"expression":{"argumentTypes":null,"id":135,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1559:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1559:13:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Request_$52_storage_$returns$_t_uint256_$","typeString":"function (struct Campaign.Request storage ref) returns (uint256)"}},"id":139,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1559:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":140,"nodeType":"ExpressionStatement","src":"1559:18:0"}]},"documentation":null,"id":142,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":123,"modifierName":{"argumentTypes":null,"id":122,"name":"onlyManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"1334:11:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1334:11:0"}],"name":"createRequest","nodeType":"FunctionDefinition","parameters":{"id":121,"nodeType":"ParameterList","parameters":[{"constant":false,"id":116,"name":"description","nodeType":"VariableDeclaration","scope":142,"src":"1237:25:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":115,"name":"string","nodeType":"ElementaryTypeName","src":"1237:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":118,"name":"value","nodeType":"VariableDeclaration","scope":142,"src":"1272:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":117,"name":"uint256","nodeType":"ElementaryTypeName","src":"1272:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":120,"name":"recipient","nodeType":"VariableDeclaration","scope":142,"src":"1295:25:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"typeName":{"id":119,"name":"address","nodeType":"ElementaryTypeName","src":"1295:15:0","stateMutability":"payable","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"value":null,"visibility":"internal"}],"src":"1227:99:0"},"returnParameters":{"id":124,"nodeType":"ParameterList","parameters":[],"src":"1346:0:0"},"scope":263,"src":"1205:379:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":181,"nodeType":"Block","src":"1636:188:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":148,"name":"approvers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":66,"src":"1654:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":151,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":149,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1664:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":150,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1664:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1654:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":147,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1646:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":152,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1646:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":153,"nodeType":"ExpressionStatement","src":"1646:30:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"1694:34:0","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":155,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1695:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":157,"indexExpression":{"argumentTypes":null,"id":156,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1704:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1695:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":158,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"votes","nodeType":"MemberAccess","referencedDeclaration":51,"src":"1695:21:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":161,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":159,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1717:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":160,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1717:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1695:33:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":154,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1686:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":163,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1686:43:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":164,"nodeType":"ExpressionStatement","src":"1686:43:0"},{"expression":{"argumentTypes":null,"id":173,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":165,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1740:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":167,"indexExpression":{"argumentTypes":null,"id":166,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1749:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1740:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":168,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"votes","nodeType":"MemberAccess","referencedDeclaration":51,"src":"1740:21:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":171,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":169,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"1762:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":170,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1762:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1740:33:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":172,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1776:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1740:40:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":174,"nodeType":"ExpressionStatement","src":"1740:40:0"},{"expression":{"argumentTypes":null,"id":179,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1790:27:0","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":175,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1790:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":177,"indexExpression":{"argumentTypes":null,"id":176,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1799:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1790:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":178,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"voteCount","nodeType":"MemberAccess","referencedDeclaration":47,"src":"1790:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":180,"nodeType":"ExpressionStatement","src":"1790:27:0"}]},"documentation":null,"id":182,"implemented":true,"kind":"function","modifiers":[],"name":"approveRequest","nodeType":"FunctionDefinition","parameters":{"id":145,"nodeType":"ParameterList","parameters":[{"constant":false,"id":144,"name":"index","nodeType":"VariableDeclaration","scope":182,"src":"1614:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":143,"name":"uint256","nodeType":"ElementaryTypeName","src":"1614:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1613:15:0"},"returnParameters":{"id":146,"nodeType":"ParameterList","parameters":[],"src":"1636:0:0"},"scope":263,"src":"1590:234:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":227,"nodeType":"Block","src":"1890:226:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":194,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"1908:25:0","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":190,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1909:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":192,"indexExpression":{"argumentTypes":null,"id":191,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1918:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1909:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":193,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"complete","nodeType":"MemberAccess","referencedDeclaration":45,"src":"1909:24:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":189,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1900:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":195,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1900:34:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":196,"nodeType":"ExpressionStatement","src":"1900:34:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":206,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":198,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1952:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":200,"indexExpression":{"argumentTypes":null,"id":199,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1961:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1952:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":201,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voteCount","nodeType":"MemberAccess","referencedDeclaration":47,"src":"1952:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":204,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":202,"name":"approversCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"1981:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"/","rightExpression":{"argumentTypes":null,"hexValue":"32","id":203,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1998:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"},"src":"1981:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":205,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1980:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1952:48:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":197,"name":"require","nodeType":"Identifier","overloadedDeclarations":[318,319],"referencedDeclaration":318,"src":"1944:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":207,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1944:57:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":208,"nodeType":"ExpressionStatement","src":"1944:57:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":214,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2046:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":216,"indexExpression":{"argumentTypes":null,"id":215,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"2055:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2046:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":217,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":41,"src":"2046:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":209,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2011:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":211,"indexExpression":{"argumentTypes":null,"id":210,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"2020:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2011:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":212,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"recipient","nodeType":"MemberAccess","referencedDeclaration":43,"src":"2011:25:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"id":213,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2011:34:0","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":218,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2011:57:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":219,"nodeType":"ExpressionStatement","src":"2011:57:0"},{"expression":{"argumentTypes":null,"id":225,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":220,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2078:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":222,"indexExpression":{"argumentTypes":null,"id":221,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"2087:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2078:15:0","typeDescriptions":{"typeIdentifier":"t_struct$_Request_$52_storage","typeString":"struct Campaign.Request storage ref"}},"id":223,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"complete","nodeType":"MemberAccess","referencedDeclaration":45,"src":"2078:24:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":224,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2105:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2078:31:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":226,"nodeType":"ExpressionStatement","src":"2078:31:0"}]},"documentation":null,"id":228,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":187,"modifierName":{"argumentTypes":null,"id":186,"name":"onlyManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"1878:11:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1878:11:0"}],"name":"finalize","nodeType":"FunctionDefinition","parameters":{"id":185,"nodeType":"ParameterList","parameters":[{"constant":false,"id":184,"name":"index","nodeType":"VariableDeclaration","scope":228,"src":"1848:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":183,"name":"uint256","nodeType":"ElementaryTypeName","src":"1848:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1847:15:0"},"returnParameters":{"id":188,"nodeType":"ParameterList","parameters":[],"src":"1890:0:0"},"scope":263,"src":"1830:286:0","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":252,"nodeType":"Block","src":"2208:180:0","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"id":241,"name":"minimumcontribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":59,"src":"2239:19:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":243,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":330,"src":"2280:4:0","typeDescriptions":{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_Campaign_$263","typeString":"contract Campaign"}],"id":242,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2272:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":244,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2272:13:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":245,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2272:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":246,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2307:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":247,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2307:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":248,"name":"approversCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"2336:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":249,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"2364:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"id":250,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"2225:156:0","typeDescriptions":{"typeIdentifier":"t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$","typeString":"tuple(uint256,uint256,uint256,uint256,address)"}},"functionReturnParameters":240,"id":251,"nodeType":"Return","src":"2218:163:0"}]},"documentation":null,"id":253,"implemented":true,"kind":"function","modifiers":[],"name":"getSummary","nodeType":"FunctionDefinition","parameters":{"id":229,"nodeType":"ParameterList","parameters":[],"src":"2141:2:0"},"returnParameters":{"id":240,"nodeType":"ParameterList","parameters":[{"constant":false,"id":231,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2164:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":230,"name":"uint256","nodeType":"ElementaryTypeName","src":"2164:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":233,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2173:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":232,"name":"uint256","nodeType":"ElementaryTypeName","src":"2173:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":235,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2182:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":234,"name":"uint256","nodeType":"ElementaryTypeName","src":"2182:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":237,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2191:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":236,"name":"uint256","nodeType":"ElementaryTypeName","src":"2191:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":239,"name":"","nodeType":"VariableDeclaration","scope":253,"src":"2200:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":238,"name":"address","nodeType":"ElementaryTypeName","src":"2200:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2163:45:0"},"scope":263,"src":"2122:266:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":261,"nodeType":"Block","src":"2452:36:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":258,"name":"requests","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"2466:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Request_$52_storage_$dyn_storage","typeString":"struct Campaign.Request storage ref[] storage ref"}},"id":259,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2466:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":257,"id":260,"nodeType":"Return","src":"2459:22:0"}]},"documentation":null,"id":262,"implemented":true,"kind":"function","modifiers":[],"name":"getRequestsCount","nodeType":"FunctionDefinition","parameters":{"id":254,"nodeType":"ParameterList","parameters":[],"src":"2419:2:0"},"returnParameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":256,"name":"","nodeType":"VariableDeclaration","scope":262,"src":"2443:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":255,"name":"uint256","nodeType":"ElementaryTypeName","src":"2443:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2442:9:0"},"scope":263,"src":"2394:94:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":264,"src":"388:2102:0"}],"src":"0:2491:0"},"compiler":{"name":"solc","version":"0.5.1+commit.c8a2cb62.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.22","updatedAt":"2020-04-23T14:17:20.684Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}}

/***/ }),

/***/ "./campaign.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_web3__ = __webpack_require__("./contracts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_contracts_Campaign_json__ = __webpack_require__("./build/contracts/Campaign.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_contracts_Campaign_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__build_contracts_Campaign_json__);


var abi = __WEBPACK_IMPORTED_MODULE_1__build_contracts_Campaign_json___default.a.abi;
/* harmony default export */ __webpack_exports__["a"] = (function (address) {
  return new __WEBPACK_IMPORTED_MODULE_0__contracts_web3__["a" /* default */].eth.Contract(abi, address);
});

/***/ }),

/***/ "./components/contribution.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__campaign_js__ = __webpack_require__("./campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts_web3__ = __webpack_require__("./contracts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_js__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes_js__);

var _jsxFileName = "/home/tanuja/Documents/ETHEREUM/StartUp/components/contribution.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var contributionForm =
/*#__PURE__*/
function (_Component) {
  _inherits(contributionForm, _Component);

  function contributionForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, contributionForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = contributionForm.__proto__ || Object.getPrototypeOf(contributionForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: '',
        errmessage: null,
        loading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
          var campaign, accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  campaign = Object(__WEBPACK_IMPORTED_MODULE_2__campaign_js__["a" /* default */])(_this.props.address);

                  _this.setState({
                    loading: true,
                    errmessage: null
                  });

                  _context.prev = 3;
                  _context.next = 6;
                  return __WEBPACK_IMPORTED_MODULE_4__contracts_web3__["a" /* default */].eth.getAccounts();

                case 6:
                  accounts = _context.sent;
                  _context.next = 9;
                  return campaign.methods.contribute().send({
                    from: accounts[0],
                    value: __WEBPACK_IMPORTED_MODULE_4__contracts_web3__["a" /* default */].utils.toWei(_this.state.value, 'ether')
                  });

                case 9:
                  __WEBPACK_IMPORTED_MODULE_5__routes_js__["Router"].replaceRoute("/campaigns/".concat(_this.props.address));
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](3);

                  _this.setState({
                    errmessage: _context.t0.message
                  });

                case 15:
                  _this.setState({
                    loading: false,
                    value: ""
                  });

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 12]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(contributionForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errmessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Amount to contribute"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Input"], {
        size: "large",
        placeholder: "Enter Amount in ether",
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setState({
            value: event.target.value
          });
        },
        label: "ether",
        labelPosition: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errmessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Button"], {
        color: "teal",
        size: "large",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Contribute"));
    }
  }]);

  return contributionForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (contributionForm);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/home/tanuja/Documents/ETHEREUM/StartUp/components/footer.js";



var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      padding: '23px 100px 55px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    width: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    inverted: true,
    as: "h4",
    content: "Group 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"], {
    link: true,
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Link One"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Link Two"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Link Three"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Link Four"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    width: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    inverted: true,
    as: "h4",
    content: "Group 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"], {
    link: true,
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Link One"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Link Two"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Link Three"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Link Four"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    width: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    inverted: true,
    as: "h4",
    content: "Group 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"], {
    link: true,
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Link One"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Link Two"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Link Three"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Link Four"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    width: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    inverted: true,
    as: "h4",
    content: "Footer Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Crowdfunding using Ethereum smart contract,Reactjs,Nextjs,semantic-ui-react"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Divider"], {
    inverted: true,
    section: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"], {
    horizontal: true,
    inverted: true,
    divided: true,
    link: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Site Map"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, "Contact Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Terms and Conditions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "Privacy Policy"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "\u24B8 Tanuja Joshi 2020"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["List"].Item, {
    as: "a",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, "joshitanuja276@gmail.com")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_js__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes_js__);
var _jsxFileName = "/home/tanuja/Documents/ETHEREUM/StartUp/components/header.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
    className: "ui inverted teal menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes_js__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
    name: "users",
    size: "big",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "YouGo"), "  ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes_js__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Campaign "), "  ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes_js__["Link"], {
    route: "/campaigns/new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
    name: "plus",
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), " ")))));
});

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_js__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/home/tanuja/Documents/ETHEREUM/StartUp/components/layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__header_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), props.children);
});

/***/ }),

/***/ "./contracts/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else {
  var provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/526706ceeed54d7bb242879ec3033c18");
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "./pages/campaigns/show.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__campaign__ = __webpack_require__("./campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contracts_web3__ = __webpack_require__("./contracts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contribution__ = __webpack_require__("./components/contribution.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_js__ = __webpack_require__("./components/footer.js");

var _jsxFileName = "/home/tanuja/Documents/ETHEREUM/StartUp/pages/campaigns/show.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var CampaignShow =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignShow, _Component);

  function CampaignShow() {
    _classCallCheck(this, CampaignShow);

    return _possibleConstructorReturn(this, (CampaignShow.__proto__ || Object.getPrototypeOf(CampaignShow)).apply(this, arguments));
  }

  _createClass(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          minimumcontribution = _props.minimumcontribution,
          balance = _props.balance,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          manager = _props.manager;
      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumcontribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: requestsCount,
        meta: 'Number of requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: __WEBPACK_IMPORTED_MODULE_5__contracts_web3__["a" /* default */].utils.fromWei(balance, 'ether').toString(),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left',
        style: {
          overflowWrap: 'break-word'
        }
      }];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundColor: 'grey',
          padding: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Card"].Group, {
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginLeft: '7%',
          marginRight: '7%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Campaign Show"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginLeft: '60px',
          fontFamily: "veranda",
          fontSize: "small"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "[Here is the detail of the campaign you have clicked upon. The grid below specifies the complete information related to a particular campaign. One can contribute to this campaign by clicking Contribute. There is also an option to view the requests made by the manager through the campaign]"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Column, {
        width: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, this.renderCards()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Column, {
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_contribution__["a" /* default */], {
        address: this.props.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Button"], {
        color: "teal",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "View Requests"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginTop: '7.4%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_footer_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var campaign, summary;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = Object(__WEBPACK_IMPORTED_MODULE_3__campaign__["a" /* default */])(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                console.log(summary);
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumcontribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return CampaignShow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/campaigns/show.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=show.js.map