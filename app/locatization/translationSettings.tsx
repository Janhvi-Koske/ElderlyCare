// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import i18n, { setAppLanguage } from './translations'; // Ensure this file exists or update the path
// import { useRouter } from 'expo-router';

// const LanguageSettings: React.FC = () => {
//   const router = useRouter();

//   const changeLanguage = async (lang: 'en' | 'hi' | 'mr') => {
//     await setAppLanguage(lang);
//     router.replace('/'); // Reload app with new language
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{i18n.t('chooseLanguage')}</Text>

//       {(['en', 'hi', 'mr'] as const).map((lang) => (
//         <TouchableOpacity key={lang} style={styles.button} onPress={() => changeLanguage(lang)}>
//           <Text style={styles.buttonText}>{i18n.t(lang)}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
//   button: {
//     backgroundColor: '#6200ea',
//     padding: 15,
//     width: '80%',
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
// });

// export default LanguageSettings;
