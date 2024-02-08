import { createElement } from "../createElement.js";
import { SortAllBtn } from "./SortAllBtn.js";
import { SortActiveBtn } from "./SortActiveBtn.js";
import { SortCompletedBtn } from "./SortCompletedBtn.js";

export function SortWrap(){
    const sortWrapEl = createElement({
        tagName:'div',
        className:['itemsSortWrap']
    });

    const SortAllBtnEl = SortAllBtn();
    const SortActiveBtnEl = SortActiveBtn()
    const SortCompletedBtnEl = SortCompletedBtn();

    sortWrapEl.append(SortAllBtnEl,SortActiveBtnEl,SortCompletedBtnEl);
    return sortWrapEl;
}