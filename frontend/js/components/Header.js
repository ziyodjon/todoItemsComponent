import {createElement} from "../createElement.js";
import {Title} from "./Title.js";

export function Header(){
  const headerEl = createElement({
    tagName:'header',
    className:['header']
  });

  // В компоненте можно использовать другие вложенные компоненты
  const title = Title(" My todo lists");

  headerEl.append(title);
  return headerEl
}
