//import {createElement} from ('../createElement/createElement.js');
import { createElement } from "../createElement.js";
import { Form } from "./Form.js";

export function AddItemsFormWrap(){
    const itemForm = Form();
    
    const AddItemsFormWrapEl = createElement({
        tagName: 'div',
        className:['itemsAddWrap']
    });

    AddItemsFormWrapEl.append(itemForm);
    return AddItemsFormWrapEl;
}