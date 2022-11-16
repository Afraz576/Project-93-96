//YOUR FIREBASE LINKS
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

    username = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag="<h4>"+name+"<img class= 'user_tick' src = 'tick.png'></h4>";
message_with_tag="<h4 class= 'message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_tag;
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();
function update_like(message_id){
console.log("clicked on like button-"+message_id);
button_id= message_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
console.log(updatedlikes);
firebase.database().ref(room_name).child(message_id).update({
      like: updatedlikes
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
