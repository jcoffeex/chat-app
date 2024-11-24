import CryptoES from "crypto-es";

const key: string = process.env.EXPO_PUBLIC_PRIVATE_KEY;
const encryptMessage = (message: string) => {
    const encryptedMessage = CryptoES.AES.encrypt(message, key).toString();
    return encryptedMessage;
};

const decryptMessage = (message: string) => {
    const bytes = CryptoES.AES.decrypt(message, key);
    const decryptedMessage = bytes.toString(CryptoES.enc.Utf8);
    return decryptedMessage;
}

export {
    encryptMessage,
    decryptMessage
}