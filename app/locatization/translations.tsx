// import * as Localization from 'expo-localization';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import i18n from 'i18n-js';

// const en = {
//   welcome: 'Welcome',
//   chooseLanguage: 'Choose Language',
//   english: 'English',
//   hindi: 'Hindi',
//   marathi: 'Marathi',
//   checkins: 'Check-ins',
//   medicationReminders: 'Medication Reminders',
//   checkinsSummary: 'Check-ins Summary',
//   location: 'Location',
//   profile: 'Profile',
// };

// const hi = {
//   welcome: 'स्वागत है',
//   chooseLanguage: 'भाषा चुनें',
//   english: 'अंग्रेज़ी',
//   hindi: 'हिन्दी',
//   marathi: 'मराठी',
//   checkins: 'चेक-इन',
//   medicationReminders: 'दवा अनुस्मारक',
//   checkinsSummary: 'चेक-इन सारांश',
//   location: 'स्थान',
//   profile: 'प्रोफ़ाइल',
// };

// const mr = {
//   welcome: 'स्वागत आहे',
//   chooseLanguage: 'भाषा निवडा',
//   english: 'इंग्रजी',
//   hindi: 'हिंदी',
//   marathi: 'मराठी',
//   checkins: 'चेक-इन',
//   medicationReminders: 'औषध स्मरणपत्र',
//   checkinsSummary: 'चेक-इन सारांश',
//   location: 'स्थान',
//   profile: 'प्रोफाइल',
// };

// i18n.translations = { en, hi, mr };
// i18n.fallbacks = true;

// // Load stored language or default to device language
// export const initLocalization = async () => {
//   const storedLang = await AsyncStorage.getItem('appLanguage');
//   i18n.locale = storedLang || Localization.locale.split('-')[0] || 'en';
// };

// export const setAppLanguage = async (lang: 'en' | 'hi' | 'mr') => {
//   i18n.locale = lang;
//   await AsyncStorage.setItem('appLanguage', lang);
// };

// export default i18n;
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Translation words
i18n.translations = {
  en: {
    welcome: 'Welcome',
    login: 'Login',
    logout: 'Logout',
    settings: 'Settings',
    chooseLanguage: 'Choose Language',
    emergency: 'Emergency',
  },
  hi: {
    welcome: 'स्वागत है',
    login: 'लॉगिन करें',
    logout: 'लॉगआउट करें',
    settings: 'सेटिंग्स',
    chooseLanguage: 'भाषा चुनें',
    emergency: 'आपातकालीन',
  },
  mr: {
    welcome: 'स्वागत आहे',
    login: 'लॉगिन करा',
    logout: 'लॉगआउट करा',
    settings: 'सेटिंग्ज',
    chooseLanguage: 'भाषा निवडा',
    emergency: 'आपत्कालीन',
  },
};

// Default setup
i18n.fallbacks = true;
i18n.locale = Localization.locale; // use phone language first

export default i18n;
