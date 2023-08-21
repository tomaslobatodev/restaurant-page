import { content } from "./index"

const menupage = () => {
  const main = document.createElement("main")

  const title = document.createElement('h1')
  title.textContent = 'Menu'

  main.appendChild(title)

  content.appendChild(main)
}

export { menupage }
