function addUser() {
    user_name = document.getElementById("user_name");

    localStorage.setItem("user_name", user_name);

    window.location = "Home_room.html";
}