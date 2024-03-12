//import {createElement} from ('../createElement/createElement.js');
import { createElement } from "../createElement.js";
import ItemsLi from "./ItemsLi.js";

export function Items (handlerDeleteItem,handlerChangeStatusItem){
    const itemsEl = createElement({
        tagName:'ul',
        className: ['itemsList'],
        text: 'Add a to do list'
    });

    function renderList(data){
        itemsEl.innerHTML = '';
        console.log('Data' + data);
        data.forEach(itemObj => {
            itemsEl.append(ItemsLi(itemObj,handlerDeleteItem,handlerChangeStatusItem));
        });
    }
    return {
        itemsEl,
        renderList
    };
}

// Для создания li создать отдельный компонент Айтим