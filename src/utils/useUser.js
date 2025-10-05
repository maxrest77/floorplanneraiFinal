import * as React from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


const useUser = () => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({ id: firebaseUser.uid, email: firebaseUser.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const refetch = React.useCallback(() => {
    // no-op; onAuthStateChanged keeps it live
  }, []);

  return { user, data: user, loading, refetch };
};

export { useUser }

export default useUser;