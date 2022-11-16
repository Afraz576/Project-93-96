var firebaseConfig = {
      apiKey: "AIzaSyDLnSD3CRXBPDdSzvB-pAd_fD31tqaKXsc",
      authDomain: "letschat-webapp-e44fc.firebaseapp.com",
      databaseURL: "https://letschat-webapp-e44fc-default-rtdb.firebaseio.com",
      projectId: "letschat-webapp-e44fc",
      storageBucket: "letschat-webapp-e44fc.appspot.com",
      messagingSenderId: "782365726144",
      appId: "1:782365726144:web:9c7ef77e60ca0919de6425"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!!";

function addRoom(){
roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", roomname);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names:"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoom(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}