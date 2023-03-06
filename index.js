let form = document.getElementById("form_id")
let list=document.getElementById('list')
const addElementToList=(node)=>{
list.append(node)
}
const createElement = (title, description) => {
  let newLi = document.createElement("li")
  let liContent = document.createTextNode(
    `title: ${title.value} description: ${description.value}`
  )
  newLi.appendChild(liContent)
    addElementToList(newLi)
}
const validateInputs = (title, description) => {
  if (title.value === "" || description.value === "") {
    return false
  }
  return true
}
const submitItem = (event) => {
  event.preventDefault()
  let title = document.getElementById("input_title")
  let description = document.getElementById("input_description")

  if (!validateInputs(title, description)) {
    alert("inputs are required")
    return
  }

  createElement(title, description)
  title.value=''
  description.value=''
}
form.addEventListener("submit", submitItem)
