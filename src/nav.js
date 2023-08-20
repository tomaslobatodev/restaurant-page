import { content } from "./index";

const nav = () => {
    const navItems = ["home", "menu", "about"];
    const list = document.createElement('ul');
    
    navItems.forEach(item => {
        const listItem = document.createElement('li')
        listItem.textContent = item
        listItem.onclick = `${item}()`
        list.appendChild(listItem);
    });

    const nav = document.createElement('nav');
    nav.appendChild(list);

    content.appendChild(nav)
}

export {nav}