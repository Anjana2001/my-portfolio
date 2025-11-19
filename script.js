document.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('form');


  formElement.addEventListener('submit', function(event) {

    event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var message = document.getElementById("message").value;
        document.getElementById("r-name").innerHTML = name;
        document.getElementById("r-email").innerHTML = email;
        document.getElementById("r-number").innerHTML = number;
        document.getElementById("r-text").innerHTML = message;

  });
});