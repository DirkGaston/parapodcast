import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArqDv88q2nHUgMj3BvSck0w-GBWIvMufo",
  authDomain: "parapodcast-activity.firebaseapp.com",
  projectId: "parapodcast-activity",
  storageBucket: "parapodcast-activity.appspot.com",
  messagingSenderId: "575182920480",
  appId: "1:575182920480:web:4837f2a3db3a936b125545",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const currentUserPromise = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        resolve(user);
      },
      (e) => reject(e)
    );
  });

export { auth, currentUserPromise, db };
