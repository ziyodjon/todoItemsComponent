//import {createElement} from "./createElement.js";
import {Header} from "./components/Header.js";
import {Container} from "./components/Container.js";

import { saveToLocalStorage } from "./saveToLocalStorage.js";

import { AddItemsFormWrap } from "./components/AddItemsFormWrap.js";
import { ItemsWrap } from "./components/ItemsWrap.js";
import { Footer } from "./components/Footer.js";


// Названия сервера
const SITENAME = 'http://localhost:3000';

//let data = JSON.parse(localStorage.getItem('todoItems')) || [];
let data = await getToDoServers() || [];
let dataArchive = JSON.parse(localStorage.getItem('todoArchives')) || [];
//let dataArchive = await getToDoServers() || [];



let filterType = 'all';

const handlerClear = function (obj){
    filterType = 'all';

    data.forEach((item,index)=>{
        //item => item.status = false
        data[index].status = false;
    });
    console.log(data);
    //saveToLocalStorage(data, 'todoItems');
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

const handlerAddItem = async function(inputEl){
    const obj = {
        owner:Date.now(),
        name:inputEl.value,
        status: false,
    };
    const newToDoItem = await addToDoServers(obj);
    data.push(newToDoItem);

    render();
    inputEl.value = '';
}

const handlerEditItem = function(obj){

    const toDoItemName = 'todoCheckItem'
    console.log('handlerEditItem');
    inputEl.value = 'TEST';
}
const handlerDeleteItem = async function (obj) {
    try {
        const res = await delToDoServers(obj.id);
        if (res.message) {
            throw new Error(res.message)
        }
            data = data.filter((item) => item.id !== obj.id);
            //console.log(typeof data);
            //await addToDoServers(data);
            
            dataArchive.push(obj);

            saveToLocalStorage(dataArchive, 'todoArchives');
            //saveToLocalStorage(data, 'todoItems');
            renderArchive();
            render();
    } catch (error) {
        console.log(error);
        //alert(error.message);
    }
};

const handlerDeleteArchiveItem = async function (obj){
    //  Удаления через filter
    dataArchive = dataArchive.filter((item)=> item.id !== obj.id);
    //await delToDoServers(obj.id);
    saveToLocalStorage(dataArchive, 'todoArchives');
    renderArchive();
}

const handlerChangeStatusItem = async function (obj,item){
    item.classList.toggle("checked");
    data = data.map(item => {
        if(obj.id == item.id){
            item.status = !item.status;
        } 
        
        return item;
    });
    await updateToDoServers(obj);
    render()
    //saveToLocalStorage(data, 'todoItems');
};

const hanlerAddToListItem = async function(obj){
    

    dataArchive = dataArchive.filter((item)=> item.id !== obj.id);
    
    await addToDoServers(obj);
    data.push(obj);
    saveToLocalStorage(dataArchive, 'todoArchives');
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
const AddForm = AddItemsFormWrap(handlerAddItem,handlerDeleteItem,handlerEditItem);
const itemsObj = ItemsWrap(handlerDeleteItem,handlerChangeStatusItem,handlerEditItem);
const footerObj = Footer(handlerClear,handlerSort);

const itemsArchiveObj = ItemsWrap(handlerDeleteArchiveItem,hanlerAddToListItem);

render();
renderArchive();

container.append(header,AddForm,itemsObj.itemsWrapEl,footerObj.footerEl,itemsArchiveObj.itemsWrapEl);
app.append(container);

async function  addToDoServers(Obj){
        let response = await fetch(`${SITENAME}/api/todos/`,{
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
    const response = await fetch(`${SITENAME}/api/todos/`,{
        method: 'GET',
        headers:{'Content-Type':'application-json'},
    });

    let data = await response.json();

    return data;
}

async function  updateToDoServers(obj){
    console.log(await obj);
    let response = await fetch(`${SITENAME}/api/todos/${obj.id}`,{
    method:'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
});

let dataServer = await response.json();

return dataServer;
}

async function delToDoServers(id){
    const response = await fetch(`${SITENAME}/api/todos/${id}`,{
        method: 'DELETE'
    });

    let data = await response.json();

    return data;
}