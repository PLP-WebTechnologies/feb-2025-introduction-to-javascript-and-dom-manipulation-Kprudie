function changeText() {
    document.getElementById("description").textContent = "The text has been updated!";
  }
  
  function toggleStyle() {
    document.getElementById("title").classList.toggle("highlight");
  }
  
  function addElement() {
    const newItem = document.createElement("p");
    newItem.textContent = "A new element has been added!";
    newItem.id = "newElement";
    document.getElementById("container").appendChild(newItem);
  }
  
  function removeElement() {
    const element = document.getElementById("newElement");
    if (element) {
      element.remove();
    }
  }
  