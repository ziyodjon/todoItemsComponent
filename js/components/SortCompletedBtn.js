import { createElement } from "../createElement.js";

export function SortCompletedBtn(){
    const sortCompltedBtnEl = createElement({
        tagName:'button',
        className: ['itemsCompleted'],
        text:'Completed'
    });

    return sortCompltedBtnEl;
}