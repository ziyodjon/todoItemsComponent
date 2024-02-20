//import {createElement} from ('../createElement/createElement.js');
import { createElement } from "../createElement.js";
import ItemsLi from "./ItemsLi.js";

export function Items (handlerDeleteItem){
    const itemsEl = createElement({
        tagName:'ul',
        className: ['itemsList'],
        text: 'Add a to do list'
    });

    function renderList(data){
        itemsEl.innerHTML = '';
        data.forEach(itemObj => {
            ItemsLi(itemsEl, renderList, itemObj, data,handlerDeleteItem);
        });
    }
    return {
        itemsEl,
        renderList
    };
}

// Для создания li создать отдельный компонент Айтим