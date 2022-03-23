var firebaseConfig = {
    apiKey: "AIzaSyCugMZ70AN3Vh0qM_Gl2WAdq2HkzAU0x20",
    authDomain: "twitter-rip-off-9ce8c.firebaseapp.com",
    databaseURL: "https://twitter-rip-off-9ce8c-default-rtdb.firebaseio.com",
    projectId: "twitter-rip-off-9ce8c",
    storageBucket: "twitter-rip-off-9ce8c.appspot.com",
    messagingSenderId: "343495414652",
    appId: "1:343495414652:web:f508776699994a764f4af9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("username");
var roomname = localStorage.getItem("Room_name");

function mesg() {
    var messg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        user_name: username,
        message: messg,
        like: 0,

    });
    document.getElementById("msg").value = "";

}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();