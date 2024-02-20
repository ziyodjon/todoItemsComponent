//import {createElement} from "./createElement.js";
import {Header} from "./components/Header.js";
import {Container} from "./components/Container.js";

import { AddItemsFormWrap } from "./components/AddItemsFormWrap.js";
import { ItemsWrap } from "./components/ItemsWrap.js";
import { Footer } from "./components/Footer.js";

let count = 0;
const data = [];

const handlerClear = function (){
    footerObj.setCount(++count)
}

const handlerSort = function(sortTypes){
    alert(sortTypes);
}

const handlerAddItem = function(inputEl){
    //alert(inputEl.value);
    data.push({
        id:Date.now(),
        name:inputEl.value,
        status: false,
    });
    footerObj.setCount(++count)
    render();
    inputEl.value = '';
}

const handlerDeleteItem = function (data,event) {
    const currentToDoItemId = event.target.parentElement.getAttribute('data-id');
    
    data.forEach((item,index) => {
        if(item.id === Number(currentToDoItemId)){
            data.splice(index,1);
        }
    });
};

const changeStatus = function (event){
    event.target.parentElement.classList.toggle("checked");
}

const render = function(){
    itemsObj.renderList(data);
}

const app = document.querySelector('.app');
const container = Container();
const header = Header();
const AddForm = AddItemsFormWrap(handlerAddItem,handlerDeleteItem);
const itemsObj = ItemsWrap(handlerDeleteItem);
const footerObj = Footer(handlerClear,handlerSort);

container.append(header,AddForm,itemsObj.itemsWrapEl,footerObj.footerEl);
app.append(container);
