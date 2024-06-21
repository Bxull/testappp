document.addEventListener("DOMContentLoaded", function () {
    const alertButton = document.getElementById("alertButton");

    alertButton.addEventListener("click", function () {
        Telegram.WebApp.showAlert("Hello, Telegram!");
    });

    // Notify Telegram that the app is ready
    Telegram.WebApp.ready();
});