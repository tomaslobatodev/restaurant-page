import { content } from "./index";

const footer = () => {
    const footer = document.createElement('footer')
    footer.textContent = 'Made by @tomaslobatodev'

    content.appendChild(footer)
}

export {footer}