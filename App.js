import {customElement,customCSS,reactElement} from './react.js'

//  root div where we append our elements
const maincontainer=document.getElementById("root");

// creating element through objects
let cartImage=customElement(new reactElement('img',{src:'grocery.jpg'},'empty'));
let cartHeading=customElement(new reactElement('h3',{},'Grocery'));
let cardDescription=customElement(new reactElement('p',{},'We have grocery such as vegetables, home-item,etc.'));
let cart=customElement(new reactElement('div',{},'empty'));

// Adding cart child elements and appending in main container
cart.append(cartImage);
cart.append(cartHeading);
cart.append(cardDescription);
maincontainer.append(cart);

// Adding style in elements
customCSS(cart,{width:'300px','padding-bottom':'1rem',border:'3px solid gray','text-align':'center'});
customCSS(cartImage,{width:'100%','object-fit':'cover'});





























// // defining element objects
// let a_Element=new reactElement('a',{href:'https://youtube.com',target:'_blank'},'Open Youtube');
// let p_Element=new reactElement('p',{},'Hello world');
// let h1_Element=new reactElement('h1',{},"Basic React");
// let Div_Element=new reactElement('div',{class:'container'},'<h1>Child Heading</h1>');

// // creating Element using CustomRender

// const container=(customRender(Div_Element,))
// container.append(customRender(a_Element));
// container.append(customRender(p_Element));
// maincontainer.append(container);

// // Adding style in container
// let customStyles={background:'orange',color:'white',width:'200px',padding:'2rem',margin:'auto','text-align':'center'};

// customCSS(container,customStyles);

