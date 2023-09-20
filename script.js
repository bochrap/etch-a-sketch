let currentSize = 16;
let grid = document.querySelector('#grid');
let btn_resize = document.querySelector(".btn-resize");
let btn_reset = document.querySelector(".btn-reset");
let btn_mode = document.querySelector(".btn-mode");
let isRainbow = false;



btn_resize.addEventListener('click', function(){
    const sizeInput = prompt("Choose grid size (1-100):");
    console.log(sizeInput);
    create_grid(sizeInput);
    
});

btn_reset.addEventListener('click', function(){
    create_grid(currentSize);
    
});

btn_mode.addEventListener('click', function(){
    if (isRainbow === false) {
        isRainbow = true;
        btn_mode.textContent = "COLOR MODE :)"
    }
    else if (isRainbow === true) {
        isRainbow = false;
        btn_mode.textContent = "COLOR MODE :("
    }
    sketch();
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


function sketch() {
    let cells = document.querySelectorAll('.cell', '.cell_new', '.cell_color1', '.cell_color2', '.cell_color3', '.cell_color4', '.cell_color5', '.cell_color6', '.cell_color7', '.cell_color8', '.cell_color9', '.cell_color10');

    cells.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.removeAttribute("class");

            if (isRainbow === true) {
            element.classList.add(`cell_color${Math.floor(Math.random() * 10) + 1}`);
            }
            else {element.classList.add("cell_new");};
        });
    });
};




create_grid(16);






  



    


    







