import { createElement } from "../createElement.js";

export default function ItemsLi (itemObj,handlerDeleteItem,handlerChangeStatusItem,handlerEditItem) {
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

    const editBtn = createElement({
        tagName:'button',
        className:['edit', 'fa', 'fa-pencil-square-o']
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

    editBtn.addEventListener('click',(event) => {
        event.stopPropagation();
        // Чтобы изменить один item из списка
        handlerEditItem(itemObj);
    });

    if(itemObj.status){
        item.classList.add('checked');
    }

    item.append(itemCheck,editBtn,deleteBtn);
    
    return item;
}
