//https://www.freecodecamp.org/news/event-delegation-javascript/

//Event delegation is a technique where a single event listener is
//attached to a parent element to listen for events that occur on
//its children. This is particularly useful when dealing with
//dynamically added elements.

const div = document.getElementsByTagName("div")[0]

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log("button was clicked")
  }
})