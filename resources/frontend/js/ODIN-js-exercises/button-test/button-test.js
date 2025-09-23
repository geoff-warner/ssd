// const container = document.querySelector("#container");

// const p = document.createElement("p");
// p.style.background = "red";
// p.textContent = "This is the glorious text-content!";
// container.appendChild(p);

// const h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.textContent = "I'm a blue h3!";
// container.appendChild(h3);

// const div = document.createElement("div");
// div.setAttribute("style", "border-color: black; background: pink; border: 3px");
// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div!";
// const newP = document.createElement("p");
// newP.textContent = "ME TOO!";
// div.appendChild(h1);
// div.appendChild(newP);
// container.appendChild(div);
// Copy the example above into files on your own computer. To make it work, you’ll need to supply the rest of the HTML 
// skeleton and either link your JavaScript file or put the JavaScript into a script tag on the page. 
// Make sure everything is working before moving on!

// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// the JavaScript file
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});