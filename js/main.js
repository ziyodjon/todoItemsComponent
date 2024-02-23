//import {createElement} from "./createElement.js";
import {Header} from "./components/Header.js";
import {Container} from "./components/Container.js";

import { saveToLocalStorage } from "./saveToLocalStorage.js";

import { AddItemsFormWrap } from "./components/AddItemsFormWrap.js";
import { ItemsWrap } from "./components/ItemsWrap.js";
import { Footer } from "./components/Footer.js";

let count = 0;
let data = JSON.parse(localStorage.getItem('todoItems')) || [];

let filterType = 'all';

const handlerClear = function (){
    //footerObj.setCount(++count);
    console.log(data);
    filterType = 'all';
    data.forEach(item => item.status = false);
    render();
}

const setCountItem = function(){
    const itemCount = data.filter((item) => item.status == false);
    return itemCount.length;
}

const handlerSort = function(sortTypes){
    filterType = sortTypes;
    render();
}

const handlerAddItem = function(inputEl){
    //alert(inputEl.value);
    data.push({
        id:Date.now(),
        name:inputEl.value,
        status: false,
    });
    saveToLocalStorage(data);
    //footerObj.setCount(++count)
    render();
    inputEl.value = '';
}

const handlerDeleteItem = function (Obj) {
    
    const currentToDoItemId = Obj.id;
    
    data.forEach((item,index) => {
        if(item.id === Number(currentToDoItemId)){
            data.splice(index,1);
        }
    });

    render();

};

const handlerChangeStatusItem = function (Obj,item){
    //console.log(Obj, item)
    //Obj.status = !Obj.status;
    item.classList.toggle("checked");
    data = data.map(item => {
        if(Obj.id == item.id){
            item.status = !item.status;
        } 
        
        return item;
    });
    saveToLocalStorage(data);
};

// const changeStatus = function (event){
//     event.target.parentElement.classList.toggle("checked");
// }

const render = function(){
    let filterArr = [...data];
    console.log(filterType);
    if(filterType === 'active'){
        filterArr = filterArr.filter(el => el.status === false);
    }

    if(filterType === 'completed'){
        filterArr = filterArr.filter(el => el.status === true);
    }

    //console.log(filterArr);
    itemsObj.renderList(filterArr);
    //handlerSetCountItem();
    footerObj.setCount(setCountItem());
}




const app = document.querySelector('.app');
const container = Container();
const header = Header();
const AddForm = AddItemsFormWrap(handlerAddItem,handlerDeleteItem);
const itemsObj = ItemsWrap(handlerDeleteItem,handlerChangeStatusItem);
const footerObj = Footer(handlerClear,handlerSort);

render()

container.append(header,AddForm,itemsObj.itemsWrapEl,footerObj.footerEl);
app.append(container);
