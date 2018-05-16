

  function effacer()
  {
    //console.log(this);
    //console.log(this.firstChild);
    if(confirm("Voulez-vous supprimer " + this.firstChild.data + " ?"))
    {
      document.getElementById("todolist").removeChild(this);
    }
  }



  function addList()
  {
    var element =  document.createElement("LI");
    element.appendChild(document.createTextNode(document.getElementById("todotxt").value));
    element.onclick=effacer;
    document.getElementById('todolist').appendChild(element);

  }
