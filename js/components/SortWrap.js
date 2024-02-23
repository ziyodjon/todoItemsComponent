import { createElement } from "../createElement.js";
import { SortBtn } from "./SortBtn.js";

export function SortWrap(handlerSort){
    const sortWrapEl = createElement({
        tagName:'div',
        className:['itemsSortWrap']
    });

    const SortAllBtnEl = SortBtn('All',() => {
        handlerSort('all'); 
    });
    const SortActiveBtnEl = SortBtn('Active',() => {
        handlerSort('active'); 
    });
    const SortCompletedBtnEl = SortBtn('Completed',() => {
        handlerSort('completed'); 
    });

    sortWrapEl.append(SortAllBtnEl,SortActiveBtnEl,SortCompletedBtnEl);
    return sortWrapEl;
}