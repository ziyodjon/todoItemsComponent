import { createElement } from "../createElement.js";

export default function ItemsLi (itemObj,handlerDeleteItem,handlerChangeStatusItem) {
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

    item.addEventListener('click',()=>{
        handlerChangeStatusItem(itemObj,item);
        //item.classList.toggle("checked");
    });

    deleteBtn.addEventListener('click',(event) => {
        event.stopPropagation();
        // Чтобы удалить один item из списка
        handlerDeleteItem(itemObj);
    });

    if(itemObj.status){
        item.classList.add('checked');
    }

    item.append(itemCheck,deleteBtn);
    
    return item;
}
