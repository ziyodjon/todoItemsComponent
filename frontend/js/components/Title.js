import {createElement} from "../createElement.js";

export function Title(titleText=""){
  const titleEl = createElement({
    tagName:'h1',
    className:['siteTitle'],
    text: titleText
  });

  const iconEl = createElement({
    tagName:'i',
    className:['fa','fa-th-list']
  });

  titleEl.prepend(iconEl) // Добавляем элемент в начало блока
  return titleEl
}
