// import firebase from "firebase/app";

// import "firebase/auth";

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCdQY_SjuaTl_VPDrUAwy9iUFBo9MlweeU",
//     authDomain: "hostel-allocation-assign-a50e6.firebaseapp.com",
//     projectId: "hostel-allocation-assign-a50e6",
//     storageBucket: "hostel-allocation-assign-a50e6.appspot.com",
//     messagingSenderId: "398523719263",
//     appId: "1:398523719263:web:ddd953b548f4b0a43045ea",
//     measurementId: "G-MZ1KQVVBZC"
//   });
//   export const auth=app.auth();
//   export default app;
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCcWg6c3hWs7kbw640ThU9PCOdxUx5E9dQ",
  authDomain: "hostel-sjain.firebaseapp.com",
  projectId: "hostel-sjain",
  storageBucket: "hostel-sjain.appspot.com",
  messagingSenderId: "833538435982",
  appId: "1:833538435982:web:7283a27d6905bb242a92df"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
// export default db;