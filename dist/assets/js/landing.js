// Initialize Firebase
var config = {
	apiKey: "AIzaSyBOFC9R93z-5Yq6c4wNbT2OqK3nrAROunU",
	authDomain: "product-planer.firebaseapp.com",
	databaseURL: "https://product-planer.firebaseio.com",
	projectId: "product-planer",
	storageBucket: "product-planer.appspot.com",
	messagingSenderId: "1039482368977"
};
firebase.initializeApp(config);



 $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.modal').modal();
 });

