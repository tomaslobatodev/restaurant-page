import { content, menu, home, about } from "./index";

const nav = () => {
    const navItems = ["home", "menu", "about"];
    const list = document.createElement('ul');
    
    navItems.forEach(item => {
        const listItem = document.createElement('li')
        listItem.textContent = item
        listItem.id = `${item}btn`
        list.appendChild(listItem);

        listItem.addEventListener('click', () => {
            if (item === 'home') home()
            if (item === 'menu') menu()
            if (item === 'about') about()
        });
    });

    const nav = document.createElement('nav');
    nav.appendChild(list);

    content.appendChild(nav)
}

export { nav }