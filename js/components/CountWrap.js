import { createElement } from "../createElement.js";
import { Count } from "./Count.js";

export function CountWrap(){
    const countWrapEl = createElement({
        tagName:'div',
        className:['itemsCountWrap']
    });
    const countEl = Count();

    countWrapEl.append(countEl);
    return countWrapEl;
}