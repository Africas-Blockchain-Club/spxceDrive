import abi from './abi.json';
import web3Instance from '../webInstance';

const spxceContract = () => {
	return new web3Instance.eth.Contract(
		abi,
		"0xA4d916b184c9c639435405Cb0D941e383Dd7bf96"
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