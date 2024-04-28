import abi from './abi.json';
import web3Instance from '../webInstance';

const spxceContract = () => {
	return new web3Instance.eth.Contract(
		abi,
		"0x3c248D09928a608b002b3822F751156849ef7680"
	)
}

export default spxceContract;


const account = "0x012...bc"

// Key is returned as base64
// const keyB64 = await window.ethereum.request({
//   method: 'eth_getEncryptionPublicKey',
//   params: [account],
// }) as string;
// const publicKey = Buffer.from(keyB64, 'base64');