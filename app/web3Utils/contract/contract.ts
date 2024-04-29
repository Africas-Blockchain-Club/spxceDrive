import abi from './abi.json';
import web3Instance from '../webInstance';

const spxceContract = () => {
	return new web3Instance.eth.Contract(
		abi,
		"0x46152A389675267a6A026656eB8042966d58838F"
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