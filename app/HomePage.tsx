import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const ElderlyCareApp: React.FC = () => {
  const router = useRouter();

  // Emergency contact list
  const emergencyContacts = [
    { name: 'Care Taker', number: '9892556311', icon: require('../assets/caretaker_icon.png') },
    { name: 'Guardian 1', number: '234-567-8901', icon: require('../assets/guardian1_icon.png') },
    { name: 'Guardian 2', number: '345-678-9012', icon: require('../assets/guardian2_icon.png') },
    { name: 'Neighbour', number: '890-123-4567', icon: require('../assets/neighbour_icon.png') },
    { name: 'Family Friend', number: '456-789-0123', icon: require('../assets/familyfriend_icon.png') },
    { name: 'Doctor', number: '567-890-1234', icon: require('../assets/doctor_icon.png') },
    { name: 'Security Guard', number: '678-901-2345', icon: require('../assets/securityguard_icon.png') },
    { name: 'Grocery Store', number: '789-012-3456', icon: require('../assets/grocerystore_icon.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={() => router.push('/profile')}>
          <Text style={styles.headerButtonText}>Profile</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image source={require('../assets/Logo.jpg')} style={styles.logo} />
          </View>
          <Text style={styles.headerText}>Elderly</Text>
        </View>

        <TouchableOpacity
          style={styles.sosButton}
          onPress={() => Alert.alert('SOS Emergency Activated!')}
        >
          <Image source={require('../assets/sos_icon.png')} style={styles.sosIcon} />
        </TouchableOpacity>
      </View>

      {/* Emergency Contacts */}
      <View style={styles.emergencyContacts}>
        <View style={styles.circleButtonsContainer}>
          {emergencyContacts.map((contact, index) => (
            <TouchableOpacity
              key={index}
              style={styles.circleButton}
              onPress={() => Alert.alert(`Calling ${contact.number}`)}
            >
              <Image source={contact.icon} style={styles.circleButtonIcon} />
              <Text style={styles.circleButtonText}>{contact.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Main Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.pinkButton]} onPress={() => router.push('/checkins')}>
          <View style={styles.buttonContent}>
            <Image source={require('../assets/checkins.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Check-ins</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={() => router.push('/home')}>
          <View style={styles.buttonContent}>
            <Image source={require('../assets/medication_1.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Medication Reminders</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={() => router.push('/checkinsSummary')}>
          <View style={styles.buttonContent}>
            <Image source={require('../assets/checkins_summary_1.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Check-ins Summary</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => router.push('/mapscreen')}>
          <View style={styles.buttonContent}>
            <Image source={require('../assets/location_1.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Location</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: {
    backgroundColor: '#330563',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoWrapper: {
    width: 38,
    height: 38,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  logo: { width: 43, height: 43 },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  headerButton: { padding: 10 },
  headerButtonText: { color: '#fff', fontSize: 16 },
  sosButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosIcon: { width: 40, height: 40 },
  emergencyContacts: { alignItems: 'center', paddingVertical: 10 },
  circleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  circleButtonIcon: { width: 30, height: 30, marginBottom: 5 },
  circleButtonText: {
    fontSize: 12,
    color: '#330563',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
  },
  button: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: { width: 30, height: 30, marginRight: 10 },
  buttonText: { fontSize: 18, color: '#ffffff' },
  pinkButton: { backgroundColor: '#a60d7b' },
  greenButton: { backgroundColor: '#116627' },
  blueButton: { backgroundColor: '#164f91' },
  orangeButton: { backgroundColor: '#e8ae0e' },
});

export default ElderlyCareApp;
