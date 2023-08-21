import { content } from "./index"

const aboutpage = () => {
  const main = document.createElement("main")

  const title = document.createElement('h1')
  title.textContent = 'About Us'

  main.appendChild(title)

  content.appendChild(main)
}

export { aboutpage }
