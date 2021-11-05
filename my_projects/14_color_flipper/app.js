

const screen = document.querySelector(".screen");
const background = document.querySelector(".body");
const button = document.getElementById("btn");
const span = document.getElementsByTagName("span")[0];
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");


const colorProducer = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};


const colorList = [
    "Azure",
    "Black",
    "Blue",
    "Brown",
    "Cyan",
    "Green",
    "Gray",
    "Magenta",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "White",
    "Yellow"
];


let x = 0;

function func2() {
    x = 0;
    return x;
}
function func3() {
    x = 1;
    return x;
}

function colorPick() {
    let num = (Math.random() * 13).toFixed();
    return colorList[num];
}




function func1() {
    if (x == 1) {
        let out = colorProducer();
        background.style.backgroundColor = `${out}`;
        span.style.color = `${out}`;
        span.innerText = ` ${out}`


    } else {
        let out1 =colorPick();
        background.style.backgroundColor = `${out1}`;
        span.style.color = `${out1}`;
        span.innerText = ` ${out1}`


    }





}



setInterval(() => {
    box1.style.backgroundColor = `${colorProducer()}`;
    box2.style.backgroundColor = `${colorProducer()}`;
    box3.style.backgroundColor = `${colorProducer()}`;

}, 300)


setInterval(() => {
    box1.style.borderColor = `${colorProducer()}`;
    box2.style.borderColor = `${colorProducer()}`;
    box3.style.borderColor = `${colorProducer()}`;

}, 100)




