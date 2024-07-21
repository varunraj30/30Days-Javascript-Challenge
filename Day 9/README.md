# Day 9 of Javascript Challenge

## 1.Get Element By ID and change its text content.

```Javascript
const head = document.getElementById("head")
head.textContent = "Changed text content"
//console.log(head) -> <div id="head" class="heading" style="color: red; background-color: orange;">Changed text content</div>
```

## Lessons Learned

getElementById is used to grab elements by its ID. There are few ways to change its text content<br>
1.InnerHTML-> Includes HTML tags also.<br>
2.InnerText-> Contents which are only visible (example: elements which are blocked using CSS they won't be visible).<br>
3.InnerContent-> Everything will be visible even if elements are blocked by CSS apart from HTML tags.<br>

## 2.Get Element By ClassName and change its background color.

```Javascript
const heading = document.getElementsByClassName("heading")
// console.log(heading);
// HTMLCollection [div#head.heading, head: div#head.heading]
heading[0].style.backgroundColor = "orange"
```

## Lessons Learned

getElementsByClassName is used to grab all elements by its className.<br>
Output will be of HTML collection. We can mention its index value or loop and update the values accordingly.

## 3.Create a new div element with some text and append it to the body.

```Javascript
const div = document.createElement("div")
div.textContent = "Create a div element"
document.body.appendChild(div)
```

## Lessons Learned

createElement is used to create Element<br>
Learned the difference between append and appendChild<br>
append -> can append multiple Nodes to parentNode<br>
appendChild -> can only append singleNode to parentNode

## 4.Create a new li element and add it to existing ul list.

```Javascript
const ul= document.getElementById("ul")
console.log(ul);
const newLi = document.createElement("li")
newLi.textContent="Python"
ul.appendChild(newLi)
```

## 5.Select an HTML element and remove it from DOM.

```Javascript
const li = document.getElementsByClassName("li")
console.log(li);
li[1].remove()
```

## Lessons Learned

Created two elements with li className.Grabbed all the elements having className "li" and removed last element from the DOM.

## 6.Remove the last child from specific element.

```Javascript
const li = document.querySelector("li:last-child")
console.log(li)
li.remove()
```

## Lessons Learned

querySelector is used to grab first element with the mentioned parameter.Here I have tried to grab last child of li element and removed from the DOM.

## 7.Select an HTML element and change one of its attributes.

```Javascript
const img = document.querySelector("img")
console.log(img)
img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvQn9r0KIJurVLI0_ozLa9D_l4buf2VT25g&s")
```

## Lessons Learned

setAttribute is used to add new attribute to the element.If the attribute already exists, it overwrites the existing one. In the above example, old src is replaced by new src.<br>
getAttribute is used to get all the attributes from the element.

## 8.Add and remove CSS class from element.

```Javascript
const div = document.querySelector("div")
console.log(div);
div.classList.add("changeBackgroundColor")
div.classList.remove("fontColor")
clg
```

## Lessons Learned

classList is used to grab all the classes from the element.<br>
add is used to append className at the end.
remove is used to remove className

## 9.Add a click event listener to a button that changes the text content of a Paragraph.

```Javascript
const btn = document.querySelector("button")
btn.addEventListener("click", function () {
const p = document.querySelector("p")
p.textContent="After clicking on the button para got changed :P"
}
)
```

## Lessons Learned

Grabbed button using querySelector.<br>
Learned about various event listeners (click,drag drop etc). I have passed a function that need to be executed after specific event has occured. <br>
Here I have grabbed p element and changed its content.

## 10.Add a mouseover event listener to an element that changes border colour

```Javascript
const btnTwo = document.querySelector(".btn")
btnTwo.addEventListener("mouseover", function () {
btnTwo.style.borderColor="red"
}
)
```

## Lessons Learned

Grabbed button using querySelector.<br>
Learned about various event listeners (click,drag drop etc). I have passed a function that need to be executed after specific event has occured. <br>
Here After mouseover btn border changes to red.
