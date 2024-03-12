export function saveToLocalStorage(items, key){
    localStorage.setItem(key, JSON.stringify(items));
}