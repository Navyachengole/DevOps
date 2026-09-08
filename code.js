const form = document.getElementById("Registration Form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const Name = document.getElementById("Name").value;
    const Email = document.getElementById("Email").value;
    const selectedEvent = document.getElementById("Event").value;

    alert(
        "Thank you " + Name +
        "! You have registered for the " +
        selectedEvent +
        " with email " +
        Email
    );

});