const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function(){
    let hash = "#";
    for(let i = 0; i<6 ; i++){
        hash += hexValue[crateRandomNumber()];
    }
    document.body.style.backgroundColor = hash;
    colour.textContent = hash;
})

crateRandomNumber = () =>{
    return Math.floor(Math.random()*hexValue.length);
}