import { useCallback } from 'react';
import { auth } from './firebase';
import { 
  signOut as firebaseSignOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';

function useAuth() {
  // ✅ Email/password login
  const signInWithCredentials = useCallback(async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  }, []);

  // ✅ Email/password signup
  const signUpWithCredentials = useCallback(async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  }, []);

  // ✅ Google login
  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  }, []);

  // ✅ Sign-out
  const signOut = useCallback(async () => {
    try { await firebaseSignOut(auth); } catch (e) { console.error(e); }
    try { localStorage.removeItem('auth_token'); } catch {}
  }, []);

  return {
    signInWithCredentials,
    signUpWithCredentials,
    signInWithGoogle,
    signOut,
  };
}

export default useAuth;
