import { nav } from './nav'
import './styles.css';
import { homepage } from './home';
import { menupage } from './menu';
import { aboutpage } from './about';
import { footer } from './footer'

const content = document.querySelector('#content')

const home = () => {
    content.innerHTML = ''
    nav()
    homepage()
    footer()
    
    return content
}

const menu = () => {
    content.innerHTML = ''
    nav()
    menupage()
    footer()
    
    return content
}

const about = () => {
    content.innerHTML = ''
    nav()
    aboutpage()
    footer()
    
    return content
}

document.body.appendChild(home())

export { content, home, menu, about }