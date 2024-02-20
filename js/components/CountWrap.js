import { createElement } from "../createElement.js";
import { Count } from "./Count.js";

export function CountWrap(){
    const countWrapEl = createElement({
        tagName:'div',
        className:['itemsCountWrap']
    });
    const countObj = Count();

    countWrapEl.append(countObj.countEl);
    return {
        countWrapEl,
        setCount:countObj.setCount
    };
}