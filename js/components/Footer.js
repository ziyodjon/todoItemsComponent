import { createElement } from "../createElement.js";
import { CountWrap } from "./CountWrap.js";
import { SortWrap } from "./SortWrap.js";
import { ClearWrap } from "./ClearWrap.js";

export function Footer(handlerClear,handlerSort){
    const footerEl = createElement({
        tagName: 'footer',
        className: ['itemsFooter']
    });

    const countWrapObj = CountWrap();
    const sortWrapEl = SortWrap(handlerSort);
    const clearWrapEl = ClearWrap(handlerClear);

    footerEl.append(countWrapObj.countWrapEl,sortWrapEl,clearWrapEl);
    return {
        footerEl,
        setCount:countWrapObj.setCount
    };
}