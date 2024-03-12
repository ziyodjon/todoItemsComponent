import { createElement } from "../createElement.js";

export function Count(){
    const countEl = createElement({
        tagName:'b',
        className:['itemsCount'],
        text:'0 items left'
    });

    function setCount(count){
        countEl.textContent = `${count} items left`;
    }

    return {
        countEl,
        setCount
    };
}