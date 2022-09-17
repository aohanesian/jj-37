`use strict`;

//task 1 & 2
el = document.getElementById("ulId").attributes;
let values = [];
let nodes = [];

for (let key in el) {
    let element = el[key];
    if (typeof element === "object") {
        nodes.push(element.name);
        values.push(element.value);
    }
}
console.log(values);
console.log(nodes);

//task 3
let liLast = document.querySelector("li:last-child");
liLast.innerText = `My name is Artur`;

//task 4
let liFirst = document.querySelector("li:first-child");
liFirst.setAttribute(`data-my-name`, `Artur`);

//task 5
let ul = document.getElementsByTagName(`ul`)[0];
ul.removeAttribute(`data-dog-tail`);
