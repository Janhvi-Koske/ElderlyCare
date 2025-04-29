import React, { useState, useEffect } from 'react';
 import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
 } from 'react-native';
 import { initializeApp } from 'firebase/app';
 import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  Auth,
  User,
 } from 'firebase/auth';
 import { FirebaseOptions } from 'firebase/app';
 import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
 import { useRouter } from 'expo-router'; // Import useRouter - Corrected import

 interface AuthScreenProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  handleAuthentication: () => Promise<void>;
  loading: boolean;
 }

 interface AuthenticatedScreenProps {
  user: User;
  handleLogout: () => Promise<void>;
 }

 const firebaseConfig = {
    apiKey: "AIzaSyAnjlnw80nf1OdVOLHn6ayzJDtQ8RyhuzE",
    authDomain: "elderly-care-f1e6b.firebaseapp.com",
    projectId: "elderly-care-f1e6b",
    storageBucket: "elderly-care-f1e6b.firebasestorage.app",
    messagingSenderId: "854090680320",
    appId: "1:854090680320:web:72801485a469a9bab0b0e5",
    measurementId: "G-83M1056XPJ"
  };

 const app = initializeApp(firebaseConfig);
 const auth: Auth = getAuth(app);
 const db = getFirestore(app);

 const AuthScreen: React.FC<AuthScreenProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
  loading,
 }) => {
  return (
  <View style={styles.authContainer}>
  <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
  <TextInput
  style={styles.input}
  value={email}
  onChangeText={setEmail}
  placeholder="Enter your email"
  placeholderTextColor="#999"
  autoCapitalize="none"
  keyboardType="email-address"
  />
  <TextInput
  style={styles.input}
  value={password}
  onChangeText={setPassword}
  placeholder="Enter your password"
  placeholderTextColor="#999"
  secureTextEntry
  />
  <View style={styles.buttonContainer}>
  <Button
  title={loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
  onPress={handleAuthentication}
  color="white"
  disabled={loading}
  />
  </View>
  <View style={styles.bottomContainer}>
  <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
  {isLogin
  ? 'Need an account? Sign Up'
  : 'Already have an account? Sign In'}
  </Text>
  </View>
  </View>
  );
 };

 const AuthenticatedScreen: React.FC<AuthenticatedScreenProps> = ({
  user,
  handleLogout,
 }) => {
  const router = useRouter(); // Use useRouter - Corrected hook

  const goToHome = () => {
  router.push("/home"); // Correct way in Expo Router
  };

  return (
  <View style={styles.authContainer}>
  <Text style={styles.title}>Welcome</Text>
  <Text style={styles.emailText}>{user.email}</Text>
  <Button title="Go to Home" onPress={goToHome} color="#2ecc71" />
  <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
  </View>
  );
 };

 const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Use useRouter in App component

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (authUser) => {
  setUser(authUser);
  if (authUser) {
  router.push("/HomePage"); // Redirect to home after login
  }
  });

  return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
  setLoading(true);
  try {
  if (user) {
  await signOut(auth);
  console.log('User logged out successfully!');
  } else {
  if (isLogin) {
  await signInWithEmailAndPassword(auth, email, password);
  console.log('User signed in successfully!');
  } else {
  const { user: newUser } = await createUserWithEmailAndPassword(
  auth,
  email,
  password
  );

  // Store additional user data in Firestore (e.g., role)
  await setDoc(doc(db, 'users', newUser.uid), {
  email: email,
  role: 'elderly', // or 'guardian' - you'll need to get this from the user
  // ... other user data
  });

  console.log('User created successfully!');
  Alert.alert('Signup Successful', 'Please login.');
  setIsLogin(true); // Switch to login mode after signup
  }
  }
  } catch (error: any) {
  console.error('Authentication error:', error.message);
  Alert.alert('Authentication Error', error.message);
  } finally {
  setLoading(false);
  }
  };

  const handleLogout = async () => {
  setLoading(true);
  try {
  await signOut(auth);
  console.log('User logged out successfully!');
  router.push("/auth"); // Redirect to login after logout
  } catch (error: any) {
  console.error('Logout error:', error.message);
  Alert.alert('Logout Error', error.message);
  } finally {
  setLoading(false);
  }
  };

  return (
  <ScrollView contentContainerStyle={styles.container}>
  {user ? (
  <AuthenticatedScreen user={user} handleLogout={handleLogout} />
  ) : (
  <AuthScreen
  email={email}
  setEmail={setEmail}
  password={password}
  setPassword={setPassword}
  isLogin={isLogin}
  setIsLogin={setIsLogin}
  handleAuthentication={handleAuthentication}
  loading={loading}
  />
  )}
  </ScrollView>
  );
 };

 const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  backgroundColor: 'white',
  },
  authContainer: {
  width: '80%',
  maxWidth: 400,
  backgroundColor: 'white',
  padding: 16,
  borderRadius: 8,
  elevation: 3,
  },
  title: {
  fontSize: 24,
  marginBottom: 16,
  textAlign: 'center',
  },
  input: {
  height: 40,
  borderColor: 'black',
  borderWidth: 1,
  marginBottom: 16,
  padding: 8,
  borderRadius: 4,
  },
  buttonContainer: {
  marginBottom: 16,
  backgroundColor: 'purple',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  },
  toggleText: {
  color: 'purple',
  textAlign: 'center',
  },
  bottomContainer: {
  marginTop: 20,
  },
  emailText: {
  fontSize: 18,
  textAlign: 'center',
  marginBottom: 20,
  },
 });

 export default App;