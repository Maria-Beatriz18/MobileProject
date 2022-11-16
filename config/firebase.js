import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD877grjLQ2LB2A1n6JAMZZWmf1htDTt8Q",
  authDomain: "mobileproject-fceb6.firebaseapp.com",
  projectId: "mobileproject-fceb6",
  storageBucket: "mobileproject-fceb6.appspot.com",
  messagingSenderId: "951340826588",
  appId: "1:951340826588:web:f67245c409b193e192d919",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export default auth;