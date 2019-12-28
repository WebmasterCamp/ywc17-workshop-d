import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
admin.initializeApp({ projectId: 'ywc17-workshop-d' });

const db = admin.firestore();
//
export const helloWorld = functions
  .region('us-central1')
  .https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
  });

export const register = functions
  .region('us-central1')
  .auth.user()
  .onCreate(async (user, ctx) => {
    const ref = db.collection('users').doc(user.uid);
    await ref.set({
      isRegistered: false,
      money: 100,
    });
    return;
  });
