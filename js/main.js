"use strict";

customElements.define('menu-icon',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('custom-menu-icon');
            let templateContent = template.content.cloneNode(true);

            this.appendChild(templateContent);
        }
    })

const menuList = document.querySelectorAll('aside ul li a')
menuList.forEach(this_element => {
    this_element.addEventListener('click', event => {
        menuList.forEach(element => {element.parentElement.className = ''})
        this_element.parentElement.className = 'active';
    })
})
