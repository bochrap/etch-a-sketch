let currentSize = 16;
let grid = document.querySelector('#grid');
let btn_resize = document.querySelector(".btn-resize");
let btn_reset = document.querySelector(".btn-reset");
let rainbow_colors = ["f94144", "f3722c", "f8961e", "f9844a", "f9c74f", "90be6d", "43aa8b", "4d908e", "577590", "277da1"];
var random_color = rainbow_colors[Math.floor(Math.random()*rainbow_colors.length)];



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


    sketch_rainbow();

};

//Basic sketching function
function sketch() {
    let cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.classList.remove("cell");
            element.classList.add("cell_new");
        });
    });
};

function sketch_rainbow() {
    let cells = document.querySelectorAll('.cell', '.cell_color1', '.cell_color2', '.cell_color3', '.cell_color4', '.cell_color5', '.cell_color6', '.cell_color7', '.cell_color8', '.cell_color9', '.cell_color10');

    cells.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.removeAttribute("class");
            element.classList.add(`cell_color${Math.floor(Math.random() * 10) + 1}`);
        });
    });
};




create_grid(16);






  



    


    







