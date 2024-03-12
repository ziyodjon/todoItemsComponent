import { createElement } from "../createElement.js";

export function ClearCompletedBtn(text,handlerClick){
    const clearCompletedBtnEl = createElement({
        tagName:'button',
        className:['itemsCleartBtn'],
        text:text
    });

    clearCompletedBtnEl.addEventListener('click',handlerClick);

    return clearCompletedBtnEl;
}