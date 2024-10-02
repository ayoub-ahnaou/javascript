const btn = document.getElementById("btn");
const color_name = document.getElementById("color_name");

function generate_color(){
    const chiffres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    let hexa_color = [];
    hexa_color[0] = "#";
    for(let i=1; i<7; i++){
        hexa_color[i] = chiffres[Math.floor(Math.random() * chiffres.length)];
    }

    return hexa_color.join("");
}

btn.addEventListener("click", () => {
    let color = generate_color();
    color_name.innerHTML = color;
    document.querySelector("body").style.backgroundColor = color;
})
