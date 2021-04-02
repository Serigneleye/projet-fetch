<script>
    function affichage(tab) 
    {
        var x;
            for (i in tab){
                x = document.getElementById("container").innerHTML +=
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
            
            return x;
    }
        
    fetch("https://jsonplaceholder.typicode.com/photos")
       .then(response => response.json())
       .then(donnees => affichage(donnees));
       
  
</script>