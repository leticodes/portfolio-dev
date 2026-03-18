const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    const senha = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmPassword").value;

    if (senha !== confirmar) {
        e.preventDefault();
        alert("As senhas não coincidem!");
    }
});
