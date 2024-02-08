import { createElement } from "../createElement.js";
import { ClearCompletedBtn } from "./ClearCompletedBtn.js";

export function ClearWrap(){
    const clearWrapEl = createElement({
        tagName: 'div',
        className: ['itemsCleartWrap']
    });

    const ClearCompletedBtnEl  = ClearCompletedBtn();

    clearWrapEl.append(ClearCompletedBtnEl);
    return clearWrapEl;
}