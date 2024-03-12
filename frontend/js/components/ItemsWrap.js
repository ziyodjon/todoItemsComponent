//import { createElement } from ('../createElement/createElement.js');
import { createElement } from "../createElement.js";
import { Items } from "./Items.js";

export function ItemsWrap(handlerDeleteItem,handlerChangeStatusItem){
    const itemsObj = Items(handlerDeleteItem,handlerChangeStatusItem);

    const itemsWrapEl = createElement({
        tagName: 'div',
        className: ['itemsWrap']
    });

    itemsWrapEl.append(itemsObj.itemsEl);

    return {
        itemsWrapEl,
        renderList:itemsObj.renderList
    };
}