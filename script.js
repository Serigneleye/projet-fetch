
    function affichage(tab) 
    {
        var x = document.getElementsByClassName("container")
            for (let i= 0; i<100; i++){

                x[0].innerHTML +=
                "<div class='card'>" +
                    "<a href='#'></a>" + 
                    "<a href='#'>" +
                        "<img id = 'img10' src="+tab[i]["url"]+" alt='img10' class='image'>"+
                    "</a>"+
                    "<h2 class='title'>"+tab[i]["title"]+
                        "<a id = 't13' href='#' class='link'>"+
                        "</a>"+
                    "</h2>"+
                "</div>"}
            
    }
        
    let url = "https://jsonplaceholder.typicode.com/photos"
    fetch(url).then(function(response) {
        return response.json()
      }).then(function(json) {
        affichage(json)
      });
       
  
