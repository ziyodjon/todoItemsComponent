import { createElement } from "../createElement.js";
//import {Input} from ('./Input.js');
import { Input } from "./Input.js";

export function Form(handlerSubmit){
    const formEl = createElement({
        tagName:'form',
        className:['itemsAddForm']
    });

    const  inputEl = Input({
        type:'text', 
        name:'itemsAdd', 
        className: ['itemsAddInput'], 
        placeholder: 'Type your text here', 
        required: 'required'
    });

    formEl.addEventListener('submit',(event) => {
        event.preventDefault();
        handlerSubmit(inputEl);
    });
    
    formEl.append(inputEl);
    return formEl;
}
