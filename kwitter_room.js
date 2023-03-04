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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding Room_name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Roomname= " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomname(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
