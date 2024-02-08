import { createElement } from "../createElement.js";
import { CountWrap } from "./CountWrap.js";
import { SortWrap } from "./SortWrap.js";
import { ClearWrap } from "./ClearWrap.js";

export function Footer(){
    const footerEl = createElement({
        tagName: 'footer',
        className: ['itemsFooter']
    });

    const countWrapEl = CountWrap();
    const sortWrapEl = SortWrap();
    const clearWrapEl = ClearWrap();

    footerEl.append(countWrapEl,sortWrapEl,clearWrapEl);
    return footerEl;
}