import React from 'react';
import { Button } from '../../core/components/Button';
import { auth } from 'firebase';
import { useAuth } from '../../hooks/firebase';
import { useHistory } from 'react-router';

export const Login: React.FC = () => {
  const history = useHistory();

  const login = async () => {
    try {
      const result = await auth().signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      //TODO : fix routing
      history.push('/register');
    } catch (error) {
      alert('login failed');
    }
  };
  // const [,] = useAuth();

  return (
    <div className="">
      Login!
      <Button onClick={() => login()}>Login With Google</Button>
    </div>
  );
};
