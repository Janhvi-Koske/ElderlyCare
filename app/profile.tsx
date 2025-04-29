import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const ProfileForm: React.FC = () => {
  // Elderly Info State
  const [elderlyName, setElderlyName] = useState('');
  const [elderlyAge, setElderlyAge] = useState('');
  const [elderlyGender, setElderlyGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  // Guardian Info State
  const [guardianName, setGuardianName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [contact, setContact] = useState('');

  const router = useRouter(); // Initialize useRouter

  const handleSubmit = () => {
    Alert.alert('Profile Saved', `Elderly: ${elderlyName}, Guardian: ${guardianName}`);
    // You can store this data in AsyncStorage or send to a backend here

    //  Redirect to a specific page after saving
    router.replace('/HomePage'); //  Change '/checkins' to the desired path
  };

  const handleGoBack = () => {
    router.replace('/HomePage'); // Use router.replace to navigate to the HomePage (or '/')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>&lt; Back </Text>
      </TouchableOpacity>

      <Text style={styles.header}>Edit Profile</Text>

      {/* Elderly Info */}
      <Text style={styles.sectionHeader}>Elderly Info</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={elderlyName}
        onChangeText={setElderlyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={elderlyAge}
        onChangeText={setElderlyAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={elderlyGender}
        onChangeText={setElderlyGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        value={bloodGroup}
        onChangeText={setBloodGroup}
      />

      {/* Guardian Info */}
      <Text style={styles.sectionHeader}>Guardian Info</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={guardianName}
        onChangeText={setGuardianName}
      />
      <TextInput
        style={styles.input}
        placeholder="Relationship"
        value={relationship}
        onChangeText={setRelationship}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      {/* Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#330563',
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    color: '#330563',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default ProfileForm;