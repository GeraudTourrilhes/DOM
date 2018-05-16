function afterListerClient() {
  if (this.readyState == 4 && this.status == 200) {
    var utilisateurs = JSON.parse(this.responseText);

    for (var i = 0; i < utilisateurs.length; i++) {
      var element =  document.createElement("LI");
      element.appendChild(document.createTextNode(utilisateurs[i]["id"] + " " + utilisateurs[i]["name"]));

      document.getElementById("liste_utilisateur").appendChild(element);

    }

  }
}

function afterAddClient() {
  if (this.readyState == 4 && this.status == 200) {

    /*var utilisateurs = JSON.parse(this.responseText);

    for (var i = 0; i < utilisateurs.length; i++) {
      var element =  document.createElement("LI");
      element.appendChild(document.createTextNode(utilisateurs[i]["id"] + " " + utilisateurs[i]["name"]));

      document.getElementById("liste_utilisateur").appendChild(element);

    }*/


  }
}

function loading(){
  var xhttp = new XMLHttpRequest();
  xhttp.onload = afterListerClient;
  xhttp.open("GET", "http://loisirs-web-backend.cleverapps.io/users", true);
  xhttp.send();
}

function addClient(){
  var user = new Object();

  user.name = document.querySelector('name').value;
  user.password = document.querySelector('password').value;
  user = JSON.stringify(user);

  var xhttp = new XMLHttpRequest();
  xhttp.onload = afterAddClient;
  xhttp.open("POST", "http://loisirs-web-backend.cleverapps.io/users", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user=" + user);
}
