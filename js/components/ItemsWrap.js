//import { createElement } from ('../createElement/createElement.js');
import { createElement } from "../createElement.js";
import { Items } from "./Items.js";

export function ItemsWrap(){
    const itemsEl = Items();

    const itemsWrapEl = createElement({
        tagName: 'div',
        className: ['itemsWrap']
    });

    itemsWrapEl.append(itemsEl);

    return itemsWrapEl;
}