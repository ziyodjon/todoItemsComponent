export function saveToLocalStorage(items){
    localStorage.setItem('todoItems',JSON.stringify(items));
}