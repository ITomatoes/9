var firebaseConfig = {
    apiKey: "AIzaSyBO4RbtIDa_6O3Fb9Xc6TUR50aFyScFP2g",
    authDomain: "kwitter-44c23.firebaseapp.com",
    databaseURL: "https://kwitter-44c23-default-rtdb.firebaseio.com",
    projectId: "kwitter-44c23",
    storageBucket: "kwitter-44c23.appspot.com",
    messagingSenderId: "687565567476",
    appId: "1:687565567476:web:17ffaf223f8ce9418275a1",
    measurementId: "G-V3NZCSRP99"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0

    });
    document.getElementById("msg").value = " ";


}

function getData() { firebase.database().ref("/" + room_name).on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
console.log(firebase_message_id) ;
console.log(message_data) ;
name = message_data['name'] ;
message = message_data['message'] ;
like = message_data['like'] ;

name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4>" ;
message_with_tag = "<h4 class = 'message_h4' >" + message + "</h4>" ;
like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)'>" ;
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> like:"  + like + "</span> </button> <hr>" ;
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row ;
}});});}
getData() ;

function logout() {
    localStorage.removeItem("Roomname");
    localStorage.removeItem("Username");
    window.location.replace("index.html");

}





