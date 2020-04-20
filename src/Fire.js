import firebase from 'firebase';


const firebaseConfig = {
	apiKey: "AIzaSyAdYZgPknHzkP5FwhIJMj0j_pyJuBNELzs",
	authDomain: "fir-extra-25646.firebaseapp.com",
	databaseURL: "https://fir-extra-25646.firebaseio.com",
	projectId: "fir-extra-25646",
	storageBucket: "fir-extra-25646.appspot.com",
	messagingSenderId: "27885641510",
	appId: "1:27885641510:web:806a338e40f117a7af6be7"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
