export function createElement({tagName = 'div', className = [],text = '',type = 'text',placeholder = '', name = '', required = ''}){
    const Element = document.createElement(tagName);
        Element.classList.add(...className);

        Element.textContent = text;
        if(tagName == 'input'){
            Element.name = name;
            Element.type = type;
            Element.required = required;
            Element.placeholder = placeholder;
        }

    return Element;

}
