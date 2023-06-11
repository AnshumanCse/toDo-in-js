/** @format */

const input = document.querySelector("#input");
const items = document.querySelector(".items");

input.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  if (e.key == "Enter") {
    let Evalue = e.target.value;
    AddTodo(Evalue);
    e.target.value = "";
  }
});
const AddTodo = (input) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
 
    ${input}
     <span>❌</span>
    `;
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("Done");
  });

  //remove items
  listItem.querySelector("span").addEventListener("click", () => {
    listItem.remove();
  });
    
    
  items.appendChild(listItem);
};
