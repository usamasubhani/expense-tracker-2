import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAZnWdUdzY5StMYRKbD6UrOyl-qvJmr3k",
    authDomain: "expense-tracker-2-dfb63.firebaseapp.com",
    databaseURL: "https://expense-tracker-2-dfb63.firebaseio.com",
    projectId: "expense-tracker-2-dfb63",
    storageBucket: "expense-tracker-2-dfb63.appspot.com",
    messagingSenderId: "853678621127",
    appId: "1:853678621127:web:8949525fe278219e0259e2"
  };

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export function GetToken() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((token) => {
                console.log("TOKEN: ", token)
            }).catch((err) => {
                console.log(err)
            })
        }
    })
}