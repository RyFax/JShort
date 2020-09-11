# JShort

*In development, tell me any ideas or bugs with the github issues*


### Importation
Copy and paste it in a JS file, (soon: CDN)

Minify: https://raw.githubusercontent.com/RyFax/JShort/master/JShort.min.js<br>
Classic: https://raw.githubusercontent.com/RyFax/JShort/master/JShort.js

### Values (input)
```js
s('selector').value();              // Return value of 'selector'
s('selector').value("Hello dude!"); // Set value of 'selector' to "Hello dude!"
```
*if you have selected 1 element, return directly the value. `"Value"`
<br>if you have selected more than 1 element, return list with all value. `["Value 1", "Value 2", ...]`*

### Events
```js
s('selector').event('event', () => {
    alert("Clicked!");
});
```
*Events are the classical DOM events (click, mouseover, etc...)*

### More
```js
let select = s('selector');

select.first(); // Getting the first element selected (DOM)
select.isSingle(); // Returning 'true' if you have selected only one element
select.forEach((s, i) => { // for each selected elements:
  s.value(i); // Set index (i) for value to the element
});
```
