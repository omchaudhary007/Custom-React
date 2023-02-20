// Add customElement
function customElement(reactElement){

    const newElement=document.createElement(reactElement['type']); //creating required type Element
    newElement.innerHTML=reactElement['children'];    // Adding innerHtml
    // Setting Attributes
    if(reactElement.props!=null)    
    for(let key in reactElement.props[0]){
     newElement.setAttribute(key,reactElement.props[0][key]); 
    }
    return newElement;
 }

 // Add custom CSS
 function customCSS(element,styles){
     let allStyle='';
     for(let key in styles){
         allStyle+=`${key}:${styles[key]};`;
     }
     element.setAttribute('style',`${allStyle}`);
 }
 // Element objects class
 class reactElement{
     constructor(type,props,children){
      (type==undefined)? alert("Invalid type"):this.type=type;
      (props==undefined)? this.props=null: this.props=new Array(props);
      (children=='empty' ||children==undefined)?this.children='': this.children=children;;  
     }
 }
 
 export {customElement,customCSS,reactElement};
 