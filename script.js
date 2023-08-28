document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var identifier = document.getElementById("identifier").value.toLowerCase();
    var password = document.getElementById("password").value;
    
    var users = {
        "admin": "admin",
        "max": "Max08062008",
        "exampleuser": "examplepassword"
        // Weitere Benutzernamen und Passwörter hier hinzufügen
    };
    
    if (users.hasOwnProperty(identifier) && users[identifier] === password) {
        document.getElementById("success-message").style.display = "block";
        setTimeout(function() {
            window.location.href = "Dro-down Menu/index.html";
        }, 1000);
    } else {
        alert("Fehlerhafte Anmeldeinformationen");
    }
});
