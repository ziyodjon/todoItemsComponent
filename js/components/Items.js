//import {createElement} from ('../createElement/createElement.js');
import { createElement } from "../createElement.js";

export function Items (){
    const itemsEl = createElement({
        tagName:'ul',
        className: ['itemsList'],
        text: 'Add a to do list'
    });

    return itemsEl;
}