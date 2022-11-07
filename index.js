// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5A4X3-sjS4zGu3VbY59XTuW8iYL8mdV0",
  authDomain: "kc326-91204.firebaseapp.com",
  databaseURL: "https://kc326-91204-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc326-91204",
  storageBucket: "kc326-91204.appspot.com",
  messagingSenderId: "722613352542",
  appId: "1:722613352542:web:4be3a782b908c481b81ccf",
  measurementId: "G-7X8BR3LGM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
