//import {createElement} from ('../createElement.js');
import { createElement } from "../createElement.js";

export function Input({type = '', name = '', className = [], placeholder = '', required = ''}){
    const inputEl = createElement({
        tagName:'input',
        className:className,
        type: type,
        placeholder: placeholder,
        name: name,
        required: required
    });

    return inputEl;
}