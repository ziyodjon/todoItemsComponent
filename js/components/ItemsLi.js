import { createElement } from "../createElement.js";

export default function ItemsLi (itemsEl, renderList, itemObj, data,handlerDeleteItem) {
    const item = createElement({
        tagName:'li',
        className: ['item'],
    });
    item.setAttribute('data-id',itemObj.id);
    const itemCheck = createElement({
        tagName:'div',
        className:['todoCheckItem'],
        text:itemObj.name,
    });
    const deleteBtn = createElement({
        tagName:'button',
        className:['close', 'fa', 'fa-trash-o'],
    });

    item.addEventListener('click',(event)=>{
        event.target.parentElement.classList.toggle("checked");
    });

    deleteBtn.addEventListener('click',(event) => {
        // Чтобы удалить один item из списка
        handlerDeleteItem(data,event);
        
        renderList(data);
    });

    item.append(itemCheck,deleteBtn);
    itemsEl.append(item);
}

