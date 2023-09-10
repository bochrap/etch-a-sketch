let grid = document.querySelector('#grid');


    for (i = 0; i < 36; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "column");
        grid.appendChild(div);
    };

    for (i = 0; i < 36; i++) {
        let elements = document.querySelectorAll(".column");
        let div = document.createElement("div");
        

        elements.forEach(element => {
            div.setAttribute("class", "cell");
            element.appendChild(div.cloneNode(true));
        });
    };

    let cell = document.querySelector('.cell');
    let cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.classList.remove("cell");
            element.classList.add("cell_new");
        });
    });




  



    


    







