import { createElement } from "../createElement.js";

export function SortBtn(text,handlerClick){
    const sortBtnEl = createElement({
        tagName:'button',
        className: ['itemsAll'],
        text:text
    });
    sortBtnEl.addEventListener('click',handlerClick);

    return sortBtnEl;
}