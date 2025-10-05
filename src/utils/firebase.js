import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase config provided by user
const firebaseConfig = {
  apiKey: "AIzaSyDQHlVlTTFeddP6OUXXrtLXgFY8dMBP8l4",
  authDomain: "floorplanai-8c0b4.firebaseapp.com",
  projectId: "floorplanai-8c0b4",
  storageBucket: "floorplanai-8c0b4.appspot.com",
  messagingSenderId: "5424758083",
  appId: "1:5424758083:web:0253a6b88bb87323e183f6"
};

// Ensure single app instance in HMR/dev
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };


