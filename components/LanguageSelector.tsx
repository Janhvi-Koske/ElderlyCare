import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { LanguageContext } from '../localization/LanguageContext';
import i18n from '../localization/translations';

const LanguageSelector: React.FC = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="हिंदी" onPress={() => changeLanguage('hi')} />
      <Button title="मराठी" onPress={() => changeLanguage('mr')} />
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
});
