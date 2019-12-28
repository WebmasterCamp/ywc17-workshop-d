import React, { useState, useEffect } from 'react';
import { auth, firestore } from 'firebase';

export const useAuth = () => {
  const authInstance = auth();
  const [user, setUser] = useState<any>(authInstance.currentUser);

  useEffect(() => {
    const unsubscribe = authInstance.onAuthStateChanged(newUser => {
      setUser(newUser);
    });

    return unsubscribe;
  }, []);

  return user;
};

export const useFirestoreDoc = function<T = any>(
  ref: firestore.DocumentReference
): T | undefined {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const unsubscribe = ref.onSnapshot({
      next: snapshot => {
        const newData = snapshot.data();
        if (newData) {
          for (const key in newData) {
            newData[key] =
              newData[key] instanceof firestore.Timestamp
                ? (newData[key] as firestore.Timestamp).toDate()
                : newData[key];
          }
          setData(newData as T);
        }
      },
    });
    return unsubscribe;
  }, []);

  return data;
};

export const useFirestoreCollection = function<T = any>(
  ref: firestore.CollectionReference
): T[] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const unsubscribe = ref.onSnapshot({
      next: snapshot => {
        const newDatas = snapshot.docs.map(doc => {
          const newData = doc.data();
          for (const key in newData) {
            newData[key] =
              newData[key] instanceof firestore.Timestamp
                ? (newData[key] as firestore.Timestamp).toDate()
                : newData[key];
          }
          return newData as T;
        });
        setData(newDatas);
      },
    });

    return unsubscribe;
  }, []);

  return data;
};
