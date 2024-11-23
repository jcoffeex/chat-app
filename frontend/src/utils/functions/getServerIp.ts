import { Platform } from "react-native";
const emulatorIp = '10.0.2.2';
const machineIp = '10.0.0.242';

const getServerIp = () => {
  if(Platform.OS === 'android'){
     return machineIp; 
  }
  return emulatorIp;
};

export const serverIp = getServerIp();