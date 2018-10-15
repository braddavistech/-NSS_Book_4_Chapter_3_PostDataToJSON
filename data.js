document.querySelector(".saveInputs").addEventListener("click", saveLego);

function saveLego () {
  event.preventDefault();
  const creator = document.querySelector("#input_creator").value;
  const color = document.querySelector("#input_color").value;
  const shape = document.querySelector("#input_shape").value;
  const creation = document.querySelector("#input_creation").value;
  // Once you have collected all the values, build your data structure
  const legoToSave = {
    name: creator,
    color: color,
    shape: shape,
    creation: creation
  }
  console.log(legoToSave);
  fetch('http://localhost:8088/creation', { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
}

