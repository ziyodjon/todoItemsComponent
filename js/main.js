//import {createElement} from "./createElement.js";
import {Header} from "./components/Header.js";
import {Container} from "./components/Container.js";

import { AddItemsFormWrap } from "./components/AddItemsFormWrap.js";
import { ItemsWrap } from "./components/ItemsWrap.js";
import { Footer } from "./components/Footer.js";


const app = document.querySelector('.app');
const container = Container();
const header = Header();
const AddForm = AddItemsFormWrap();
const Items = ItemsWrap();
const footer = Footer();

const todoItems = [];

container.append(header,AddForm,Items,footer);
app.append(container);

//CREATED ELEMENTS
// const container = Container(); // Создаем компонент контейнера
// const header = Header(); // Создаем компонент шапки

// const itemsAddWrap = createElement({tagName:'div', className:['itemsAddWrap']});
// const itemsAddForm = createElement({tagName:'form', className:['itemsAddForm']});
// const itemsAddInput = createElement({tagName:'input',className:['itemsAddInput'],type:'text', placeholder:'Type your text', name:'itemsAdd', required:'required'});

// const itemsWrap = createElement({tagName:'div',className:['itemsWrap']});
// const itemsList = createElement({tagName:'ul',className:['itemsList'],text:'Add a to do list'});

// const footer = createElement({tagName:'footer',className:['itemsFooter']});

// const itemsCountWrap = createElement({tagName:'div',className:['itemsCountWrap']});
// const itemsCount = createElement({tagName:'b',className:['itemsCount'],text:'0 items left'});

// const itemsSortWrap = createElement({tagName:'div',className:['itemsSortWrap']});
// const itemsAll = createElement({tagName:'button',className:['itemsAll'],text:'All'});
// const itemsActive = createElement({tagName:'button',className:['itemsActive'],text:'Active'});
// const itemsCompleted = createElement({tagName:'button',className:['itemsCompleted'],text:'Completed'});

// const itemsCleartWrap = createElement({tagName:'div',className:['itemsCleartWrap']});
// const itemsCleartBtn = createElement({tagName:'button', className:['itemsCleartBtn'], text:'Clear completed'});

// itemsAddForm.append(itemsAddInput);
// itemsAddWrap.append(itemsAddForm);

// itemsWrap.append(itemsList);
// itemsCountWrap.append(itemsCount);

// itemsSortWrap.append(itemsAll,itemsActive,itemsCompleted);

// itemsCleartWrap.append(itemsCleartBtn);

// footer.append(itemsCountWrap,itemsSortWrap,itemsCleartWrap);

// container.append(header,itemsAddWrap,itemsWrap,footer);
// app.append(container);

// // EVENTS

// itemsAddForm.addEventListener('submit',function(event){
//     event.preventDefault();
//     const todoItemText = event.target.itemsAdd.value;
//     if(todoItemText.trim() !== ''){
//         const todoItem = {
//         id:Date.now(),
//         text: todoItemText,
//         status:false,
//         };
//         todoItems.unshift(todoItem);
//     }

//     //saveToLocalStorage(todoItems);
//     showTodoItems(todoItems,itemsList);
//     this.reset();
// });

// function showTodoItems(items,todoListArea){
//     todoListArea.innerHTML = '';
//     items.forEach((item) => {
//         //const todoItemList = document.createElement('li');
//         const todoItemList = createElement({tagName:'li'});
//         todoItemList.dataset.id =item.id;

//         //const changeStatusBtn = document.createElement('div');
//         const changeStatusBtn = createElement({tagName:'div',className:['todoCheckItem']});
//         //changeStatusBtn.classList.add('todoCheckItem');
//         if(item.status) todoItemList.classList.add('checked');
//         changeStatusBtn.textContent = item.text;
//         const delBtn = document.createElement('span');
//         delBtn.classList.add('close', 'fa', 'fa-trash-o');

//         todoItemList.append(changeStatusBtn,delBtn);
//         todoListArea.append(todoItemList);
//         changeStatusBtn.addEventListener('click',changeItemStatus);
//         delBtn.addEventListener('click', deleteCurrentToDoItem);
//       });
//   }
