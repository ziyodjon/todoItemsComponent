import { createElement } from "../createElement.js";

export function SortActiveBtn(){
    const sortActiveBtnEl = createElement({
        tagName:'button',
        className:['itemsActive'],
        text:'Active'
    });

    return sortActiveBtnEl;
}