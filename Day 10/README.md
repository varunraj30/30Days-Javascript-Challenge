# Day 10 of Javascript Challenge

## 1.Add a click event listener to a button that changes the text content of a paragraph.

```Javascript
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    const p = document.querySelector("p");
    p.textContent = "This is changed content";
    });
```

## 2.Add a double-click event listener to an image that toggles its visibility.

```Javascript
const toggle = document.querySelector("#toggle");
toggle.addEventListener("dblclick", function () {
    const img = document.querySelector("img");
     if (img.style.display === "none") {
        img.style.display = "block";
        toggle.textContent = "Toggle"
        } else {
            img.style.display = "none";
            toggle.textContent = "Untoggle"
            }
        })
```

## Lessons Learned

Learned about dblclick and display properties.<br>

## 3.Add a mouseover event listener to an element that changes its background color.

```Javascript
const hover = document.getElementById("Hover")
    hover.addEventListener("mouseover",function () {
        hover.style.backgroundColor ="red"
        })
```

## Lessons Learned

Learned about mouseover,mouseout event<br>

## 4.Add a mouseout event listener to an element that resets its background color.

```Javascript
hover.addEventListener("mouseout",function () {
    hover.style.backgroundColor =""
    })
```

## 5.Add a keydown event listener to an input field that logs the key pressed to the console.

```Javascript
const input = document.querySelector("input")
input.addEventListener("keydown",function (e) {
    console.log("key pressed", e.key);
    })
```

## Lessons Learned

Learned about keydown,keyup events which are passed to e function.

## 6.Add a keyup event listener to an input field that displays the current value in a paragraph.

```Javascript
input.addEventListener("keyup",function () {
    const p = document.getElementById("currentValue")
     p.textContent = this.value
    })
```

## 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

```Javascript
const form = document.getElementById("myform")
    form.addEventListener('submit',function (e) {
        e.preventDefault()
        const formData = new FormData(form);
        console.log(formData);
        formData.forEach((value) =>{
            console.log(value);
            })
        })
```

## Lessons Learned

Learned about submit button, preventDefault function and FormData Class.<br>

## 8.Add a change event listener to a select dropdown that displays the selected value in a paragraph.

```Javascript
const dropdown = document.querySelector("#dropdown")
    const dropdownValue = document.querySelector("#dropdownValue")
    dropdown.addEventListener('change',function () {
        dropdownValue.textContent = "Selected Value " + dropdown.value
    })
```

## Lessons Learned

Learned about change event.<br>

## 9.Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

```Javascript
const ul = document.querySelector("ul")
    ul.addEventListener('click',function (e) {
        console.log( e.target.textContent);
    })
```

## Lessons Learned

Explored about various values inside e.<br>

## 10.Add an event listener to a parent element that listens for events from dynamically added child elements.

```Javascript
const addItem = document.getElementById("additem")
const parent = document.getElementById("parent")
const newItem = document.getElementById("newitem")

addItem.addEventListener('click',function () {
    const child = document.createElement("li")
    child.textContent = newItem.value
    parent.appendChild(child)
})
```
