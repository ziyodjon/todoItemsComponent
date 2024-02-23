import { createElement } from "../createElement.js";
import { ClearCompletedBtn } from "./ClearCompletedBtn.js";

export function ClearWrap(handlerClear){
    const clearWrapEl = createElement({
        tagName: 'div',
        className: ['itemsCleartWrap']
    });

    const ClearCompletedBtnEl  = ClearCompletedBtn('Clear completed',handlerClear);

    clearWrapEl.append(ClearCompletedBtnEl);
    return clearWrapEl;
}