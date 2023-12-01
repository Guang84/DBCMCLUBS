function submitted() {
    var email = document.getElementById("email").value;
    var rollNo = document.getElementById("rollno").value;
    var commentText = document.getElementById("comtext").value;
    var com = email + rollNo + commentText;

    if (email.trim() === "" || rollNo.trim() === "" || commentText.trim() == "") {
        alert("Email and Roll_no are mandatory fields. Please fill them out.");
        return false;
    }
    alert("Submitted!\n\nEmail: " + email + "\nRoll_no: " + rollNo + "\nComment: " + commentText);

    return false;
}
