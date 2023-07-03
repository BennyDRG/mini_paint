window.onload = () => {
    // On crée la palette
    document.querySelectorAll("#palette div").forEach(element => 
    {
        // On met les couleurs
        element.style.backgroundColor = element.dataset.color;

        //On écoute le clic
        element.addEventListener("click", () => {
            canvas.setColor(element.dataset.color);
        })
        
    })

    // On charge le canvas
    let canvas = new Dessin("#feuille");

    // On gère le clic sur le plus
    document.querySelector("#plus").addEventListener("click", () => {
        canvas.biggerStroke();
    })
    // On gère le clic sur le moins
    document.querySelector("#moins").addEventListener("click", () => {
        canvas.smallerStroke();
    })
    // On gère le clic sur la gomme
    document.querySelector("#gomme").addEventListener("click", () => {
        canvas.setColor("white");
    })
    // On gère le clic sur la croix pour effacer
    document.querySelector("#effacer").addEventListener("click", () => {
        canvas.erase();
    })

}

