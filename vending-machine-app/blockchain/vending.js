import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider(
  "https://goerli.infura.io/v3/998812fb2a924d59acc7752bd5deb27a"
)

const web3 = new Web3(provider)

const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "donutBalances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVendingMachineBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "purchase", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "restock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const vmContract = new web3.eth.Contract(abi, "0xC45b2dAA4EC0dEf922229E07E88e787A3eE9d319")

export default vmContract