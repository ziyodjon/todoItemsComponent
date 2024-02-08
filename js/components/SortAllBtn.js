import { createElement } from "../createElement.js";

export function SortAllBtn(){
    const sortAllBtnEl = createElement({
        tagName:'button',
        className: ['itemsAll'],
        text:'All'
    });

    return sortAllBtnEl;
}