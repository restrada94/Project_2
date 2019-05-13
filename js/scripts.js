function process() {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (name == "") {
    alert("Please enter a name.");
  }
  if (email == "") {
    alert("Please enter an e-mail address.");
  }
  if (subject == "") {
    alert("Please enter a subject for the message.");
  }
  if (message == "") {
    alert("Please enter a message.");
  }
  alert("Successfully submitted! Thanks!");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
