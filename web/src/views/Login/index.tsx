import React, { useEffect } from 'react';
import { Button } from '../../core/components/Button';
import { auth } from 'firebase';
import {
  useAuth,
  useFirestoreDoc,
  useFirestoreCollection,
} from '../../hooks/firebase';
import { firestore } from 'firebase';

export const Login: React.FC = () => {
  const login = async () => {
    try {
      const result = await auth().signInWithPopup(
        new auth.GoogleAuthProvider()
      );
    } catch (error) {
      alert('login failed');
    }
  };

  const user = useAuth();
  return (
    <div className="">
      Login!
      <Button onClick={() => login()}>Login With Google</Button>
      {JSON.stringify(user)}
    </div>
  );
};
