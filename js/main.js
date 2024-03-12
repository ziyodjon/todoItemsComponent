//import {createElement} from "./createElement.js";
import {Header} from "./components/Header.js";
import {Container} from "./components/Container.js";

import { saveToLocalStorage } from "./saveToLocalStorage.js";

import { AddItemsFormWrap } from "./components/AddItemsFormWrap.js";
import { ItemsWrap } from "./components/ItemsWrap.js";
import { Footer } from "./components/Footer.js";


// Для получение данных сделать из двух один
let data = JSON.parse(localStorage.getItem('todoItems')) || [];
//let dataArchive = JSON.parse(localStorage.getItem('todoArchives')) || [];
let dataArchive = await getToDoServers() || [];

let filterType = 'all';

const handlerClear = function (){
    filterType = 'all';

    data.forEach(item => item.status = false);

    saveToLocalStorage(data, 'todoItems');
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
    data.push({
        id:Date.now(),
        owner:Date.now(),
        name:inputEl.value,
        status: false,
    });
    //addToDoServers(dataToServer);
    saveToLocalStorage(data, 'todoItems');
    render();
    inputEl.value = '';
}

const handlerDeleteItem = async function (Obj) {
    dataArchive.push(Obj);

    await addToDoServers(Obj);
    data = data.filter((item) => item.owner !== Number(Obj.owner));
    
    //saveToLocalStorage(dataArchive, 'todoArchives');
    saveToLocalStorage(data, 'todoItems');
    renderArchive();
    render();

};

const handlerDeleteArchiveItem = async function (Obj){
    //  Удаления через filter
    dataArchive = dataArchive.filter((item)=> item.owner !== Number(Obj.owner));
    dataArchive = await delToDoServers(Obj.id);
    alert();

    //saveToLocalStorage(dataArchive, 'todoArchives');
    renderArchive();
}

const handlerChangeStatusItem = function (Obj,item){
    item.classList.toggle("checked");
    data = data.map(item => {
        if(Obj.owner == item.owner){
            item.status = !item.status;
        } 
        
        return item;
    });
    render()
    saveToLocalStorage(data, 'todoItems');
};

const hanlerAddToListItem = async function(Obj){
    data.push(Obj);

    dataArchive = dataArchive.filter((item)=> item.id !== Number(Obj.id));
    //await addToDoServers(dataArchive);
    await delToDoServers(Obj.id);
    //saveToLocalStorage(dataArchive, 'todoArchives');
    saveToLocalStorage(data, 'todoItems');
    renderArchive();
    render();
}


const render = function(){
    let filterArr = [...data];

    if(filterType === 'active'){
        filterArr = filterArr.filter(el => el.status === false);
    }

    if(filterType === 'completed'){
        filterArr = filterArr.filter(el => el.status === true);
    }

    itemsObj.renderList(filterArr);
    footerObj.setCount(setCountItem());
}

const renderArchive = function(){
    itemsArchiveObj.renderList(dataArchive);
}




const app = document.querySelector('.app');
const container = Container();
const header = Header();
const AddForm = AddItemsFormWrap(handlerAddItem,handlerDeleteItem);
const itemsObj = ItemsWrap(handlerDeleteItem,handlerChangeStatusItem);
const footerObj = Footer(handlerClear,handlerSort);

const itemsArchiveObj = ItemsWrap(handlerDeleteArchiveItem,hanlerAddToListItem);

render();
renderArchive();

container.append(header,AddForm,itemsObj.itemsWrapEl,footerObj.footerEl,itemsArchiveObj.itemsWrapEl);
app.append(container);

async function  addToDoServers(Obj){
        let response = await fetch('http://localhost:3000/api/todos/',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Obj)
    });

    let dataServer = await response.json();

    return dataServer;
}

async function getToDoServers(){
    const response = await fetch(`http://localhost:3000/api/todos/`,{
        method: 'GET',
        headers:{'Content-Type':'application-json'},
    });

    let data = await response.json();

    return data;
}

async function delToDoServers(id){
    const response = await fetch(`http://localhost:3000/api/todos/${id}`,{
        method: 'DELETE'
    });

    let data = await response.json();

    return data;
}