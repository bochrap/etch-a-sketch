let currentSize = 16;
let grid = document.querySelector('#grid');
let btn_resize = document.querySelector(".btn-resize");
let btn_reset = document.querySelector(".btn-reset");



btn_resize.addEventListener('click', function(){
    const sizeInput = prompt("Choose grid size (1-100):");
    console.log(sizeInput);
    create_grid(sizeInput);
    
});

btn_reset.addEventListener('click', function(){
    create_grid(currentSize);
    
});


//Any create_grid function calls after the first one keep adding 
//new divs to the grid
//find a way to clear grid of all divs before calling the function again
function clear() {
    document.querySelectorAll(".column").forEach(e => e.remove());
};

//Grid making function
function create_grid(grid_size) {

    clear();
    currentSize = grid_size;


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

create_grid(16);






  



    


    







