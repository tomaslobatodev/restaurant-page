import { nav } from './nav'
import './styles.css';
import { homepage } from './home';
import {footer} from './footer'

const content = document.querySelector('#content')

const home = () => {
    content.innerHTML = ''
    console.log('home')
    nav()
    homepage()
    footer()
    
    return content
}

document.body.appendChild(home())

export {content}