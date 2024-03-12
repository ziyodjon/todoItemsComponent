import {createElement} from "../createElement.js";

export function Container(){
  const containerEl=createElement({
    tagName:'div', className:['container']
  });
  return containerEl
}
