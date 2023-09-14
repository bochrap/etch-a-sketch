let grid = document.querySelector('#grid');




//Grid making function
function create_grid(grid_size) {
    for (i = 0; i < grid_size; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "column");
        grid.appendChild(div);
    };

    for (i = 0; i < grid_size; i++) {
        let elements = document.querySelectorAll(".column");
        let div = document.createElement("div");
        

        elements.forEach(element => {
            div.setAttribute("class", "cell");
            element.appendChild(div.cloneNode(true));
        });
    };

    sketch();

};

//Basic sketching function
function sketch() {
    let cell = document.querySelector('.cell');
    let cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.classList.remove("cell");
            element.classList.add("cell_new");
        });
    });
};

create_grid(24);




  



    


    







