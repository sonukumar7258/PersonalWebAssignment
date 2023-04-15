function filterProjects() {
    var input = document.getElementById("tech").value;
    var projects = document.getElementById("project-list").getElementsByTagName("li");
  
    for (var i = 0; i < projects.length; i++) {
      var technology = projects[i].textContent.match(/\(([^)]+)\)/)[1];
      if (technology.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        projects[i].style.display = "";
      } else {
        projects[i].style.display = "none";
      }
    }
  }
  function filterProjects() {
    var input = document.getElementById("tech").value;
    var projects = document.getElementById("project-list").getElementsByTagName("li");
  
    for (var i = 0; i < projects.length; i++) {
      var technology = projects[i].textContent.match(/\(([^)]+)\)/)[1];
      if (technology.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        projects[i].style.display = "";
      } else {
        projects[i].style.display = "none";
      }
    }
  }
    