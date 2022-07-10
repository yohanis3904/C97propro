
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB74LehjQReAoD6XPgEEKWGNPoLR3y7iRI",
  authDomain: "classtest-de7c2.firebaseapp.com",
  projectId: "classtest-de7c2",
  storageBucket: "classtest-de7c2.appspot.com",
  messagingSenderId: "606160461270",
  appId: "1:606160461270:web:cb3a85cb4bf03a96709877",
  measurementId: "G-G49TTGDR1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window. location="Home_page .html";
}
function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "Home_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function addRoom(){
  window.location = "Home_page.html"
}