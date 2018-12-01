import Web3 from 'web3'
import {address, ABI} from './constants/donacionContract'

let getContract = new Promise(function (resolve, reject) {
 let web3 = new Web3(window.web3.currentProvider)
 let donacionContract = web3.eth.contract(ABI)
 let donacionContractInstance = donacionContract.at(address)
 console.log(donacionContract)
 console.log(donacionContractInstance)
 resolve(donacionContractInstance)
})
export default getContract