const colours = ["red", "green", "yellow", "orange"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function(){
    let randomNumber = createRandomNumber();
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
})

createRandomNumber = () => {
    return Math.floor(Math.random()*colours.length);
}