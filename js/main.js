"use strict";
const menuList = document.querySelectorAll('aside ul li a')
menuList.forEach(this_element => {
    this_element.addEventListener('click', event => {
        menuList.forEach(element => {element.parentElement.className = ''})
        this_element.parentElement.className = 'active';
    })
})
