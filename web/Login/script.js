document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value.toLowerCase(); // Benutzernamen in Kleinbuchstaben umwandeln
    var password = document.getElementById("password").value;
    
    if (username === "max" && password === "max") {
        document.getElementById("success-message").style.display = "block"; // Zeige Erfolgsmeldung an
        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000); // Nach 1 Sekunde zur Dashboard-Seite weiterleiten
    } else {
        alert("Fehlerhafte Anmeldeinformationen");
    }
});
