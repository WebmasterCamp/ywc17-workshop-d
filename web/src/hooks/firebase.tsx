import { useState, useEffect } from 'react';
import { auth, firestore, User as FirebaseUser } from 'firebase';
import { User } from '../core/models/user';
import { useHistory } from 'react-router';
import { useLocalStorage } from './localstorage';

export const useAuth = (): [
  undefined | FirebaseUser | null,
  User | Partial<User> | undefined | null
] => {
  const authInstance = auth();
  const [userStorage, setUserStorage] = useLocalStorage<
    FirebaseUser | undefined
  >('user');
  const [user, setUser] = useState<FirebaseUser | undefined | null>(
    userStorage
  );
  const history = useHistory();
  const userData = useFirestoreDoc<Partial<User>>(
    user
      ? firestore()
          .collection('users')
          .doc(user?.uid)
      : undefined
  );

  useEffect(() => {
    const unsubscribe = authInstance.onAuthStateChanged(newUser => {
      setUserStorage(newUser);
      setUser(newUser);
    });

    return unsubscribe;
  }, [authInstance]);

  useEffect(() => {
    if (!user && user !== null) {
      //TODO: fix this boi
      // history.push('/login');
    } else if (!(userData !== null && userData && userData.username)) {
      // history.push('/register');
    }
  }, [user, userData, history]);

  return [user, userData];
};

export const useFirestoreDoc = function<T = any>(
  ref?: firestore.DocumentReference
): WithId<T> | null | undefined {
  const [data, setData] = useState<WithId<T> | null>();

  useEffect(() => {
    if (ref) {
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
            setData({ ...newData, id: snapshot.id } as WithId<T>);
          } else {
            setData(null);
          }
        },
      });
      return unsubscribe;
    }
  }, []);

  return data;
};

export const useFirestoreCollection = function<T = any>(
  ref?: firestore.CollectionReference
): WithId<T>[] {
  const [data, setData] = useState<WithId<T>[]>([]);

  useEffect(() => {
    if (ref) {
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
            return { ...newData, id: doc.id } as WithId<T>;
          });
          setData(newDatas);
        },
      });

      return unsubscribe;
    }
  }, []);

  return data;
};

export const useFirestoreQuery = function<T = any>(
  ref?: firestore.Query
): WithId<T>[] {
  const [data, setData] = useState<WithId<T>[]>([]);

  useEffect(() => {
    if (ref) {
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
            return { ...newData, id: doc.id } as WithId<T>;
          });
          setData(newDatas);
        },
      });

      return unsubscribe;
    }
  }, []);

  return data;
};

export type WithId<T> = T & { id: string };
