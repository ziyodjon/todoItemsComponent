import { createElement } from "../createElement.js";

export function ClearCompletedBtn(){
    const clearCompletedBtnEl = createElement({
        tagName:'button',
        className:['itemsCleartBtn'],
        text:'Clear completed'
    });

    return clearCompletedBtnEl;
}