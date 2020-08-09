importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')
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

self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!'
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});