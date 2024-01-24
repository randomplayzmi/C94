const firebaseConfig = {
    apiKey: "AIzaSyDor5ZJ5Vc0rPKaufgWm3niTP7vc2WZVPQ",
    authDomain: "letschat-88e26.firebaseapp.com",
    projectId: "letschat-88e26",
    storageBucket: "letschat-88e26.appspot.com",
    messagingSenderId: "639306598347",
    appId: "1:639306598347:web:46018e3f5daecda007184e"
  };
  
  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
      
      });});}
getData();
