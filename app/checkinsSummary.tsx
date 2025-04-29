import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

type Checkin = {
  id: string;
  date: string;
  time: string;
  status: 'Completed' | 'Missed' | 'Pending';
};

const sampleCheckins: Checkin[] = [
  { id: '1', date: '2025-03-30', time: '08:00 AM', status: 'Completed' },
  { id: '2', date: '2025-03-30', time: '06:00 PM', status: 'Completed' },
  { id: '3', date: '2025-03-31', time: '08:00 AM', status: 'Missed' },
  { id: '4', date: '2025-03-31', time: '06:00 PM', status: 'Pending' },
];

type StatusKey = 'completed' | 'missed' | 'pending';

const CheckinsSummaryScreen: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  const handleGoBack = () => {
    router.replace('/HomePage'); // Use router.replace to go back
  };

  const renderItem = ({ item }: { item: Checkin }) => {
    const statusKey = item.status.toLowerCase() as StatusKey;

    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {item.date} - {item.time}
        </Text>
        <Text style={[styles.status, styles[statusKey]]}>{item.status}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check-ins Summary</Text>
      <FlatList
        data={sampleCheckins}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Back to Home Button (at the bottom) */}
      <TouchableOpacity style={styles.backButtonBottom} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>&lt; Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#330563',
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  completed: {
    color: 'green',
  },
  missed: {
    color: 'red',
  },
  pending: {
    color: 'orange',
  },
  backButtonBottom: {
    marginTop: 20, // Add some space above the button
    marginBottom: 10, // Add a little space below
    alignSelf: 'center', // Center the button horizontally
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
});

export default CheckinsSummaryScreen;