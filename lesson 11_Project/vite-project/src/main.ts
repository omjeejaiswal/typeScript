import './css/style.css'
import FullList from './model/FullList'
import listItems from './model/Listitem'
import ListTemplate from './templates/ListTemplate'


const initApp =(): void => {
  const fullList = FullList.instance
  const templates = ListTemplate.instance

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
  
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if(!newEntryText.length) return 

    const itemId:

  })
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    templates.clear()
  })

  fullList.load()
  templates.render(fullList)

}

document.addEventListener("DOMContentLoaded", initApp)



