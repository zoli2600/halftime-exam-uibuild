// a feladat azt írja a body-nál ne írjunk a html-be
// az első elem egy h1 tehát header, azt a header részbe írtam, és a html-ben található meg
 
document.addEventListener('DOMContentLoaded', () => {

const ElementContainer = document.getElementById("root")

const header = document.createElement('h1')
header.textContent = "Visszajelzés"
header.classList.add("header")

ElementContainer.appendChild(header)


const textInput = document.createElement('input')

textInput.setAttribute('type', 'text')
textInput.setAttribute('placeholder', 'Tárgy')

ElementContainer.appendChild(textInput)


const CommentText = document.createElement('textarea')
CommentText.setAttribute('placeholder', 'Megjegyzés')
ElementContainer.appendChild(CommentText)

const firstCheckBox = document.createElement('input')
firstCheckBox.setAttribute('type', 'checkbox')
ElementContainer.appendChild(firstCheckBox)

const secondCheckBox = document.createElement('input')
secondCheckBox.setAttribute('type', 'checkbox')
ElementContainer.appendChild(secondCheckBox)

})
