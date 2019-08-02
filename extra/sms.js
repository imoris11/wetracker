import { Linking, Platform } from 'react-native';

const openUrl = (url) => {
    return Linking.openURL(url);
  }

export const  openSmsUrl = (phone, body) => {
    return openUrl(`sms:${phone}${getSMSDivider()}body=${body}`);
}

const getSMSDivider = () => {
    return Platform.OS === "ios" ? "&" : "?";
}