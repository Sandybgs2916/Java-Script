// DOM is the Document Object Model, which deals with the document, the HTML element
// change the background color in to red of any sites
// click <right> <inspect> <console> then type
// document.body.style.background = "red"; now the background will be red

// BOM is Browser Object Model, which deals with browser components aside from the
// documents, like history, location, navigation and screen.

// functions alert/confirm/prompt are also part of BOM
// they are directly not related to the document
// below text if we put in console of anysite while inspect it will rendered on
// thapatechnical u tube
/* alert(location.href);
if(confirm("Want to visit ThapaTechnical?")) {
    location.href = "https://www.youtube.com/thapatechnical";
}  */ 

// Navigate through the Dom i.e inspect any sites go to console nd type 
// 1. document: it returns whole html document
// 2. document.documentElement: returns the root element of document i.e html
// 3. document.body: it returns everything present in body element
// 4. document.head: it returns everything present in head element
// 5. document.body.childNodes: it returns no of nodes present in body element
// it includes tab, enter and whitespaces
// 6. document.body.children: it returns name of child i.e either id or class present in body tag
// 7. document.body.children.length: it returns number of child i.e either id or class present in body tag

// method how to find body element has child or not i.e hasChildNodes() method:
// document.body.hasChildNodes() this method give true or false i.e boolean value

// how to find the child in DOM TREE
// firstChild vs firstElementChild
// lastChild vs lastElementChild

// document.body.firstChild() method gives "text" output as if we put enter after any element 
// then text default comes as child output
// document.body.firstElementChild() gives output as first id name or class name comes in body element.
// document.body.firstElementChild().firstElementChild() gives subsclass or subid present in body class or id.
// How to change color of any child  class
// const childTwo = document.querySelector('.child-two');
// output: undefined
// Now write class name here: childTwo
// Output: <div class="child-two">..</div> 
// childTwo.style.color = "yellow"  and then childTwo color change to yellow

// document.body.parentElement(): this method gives parent node of body i.e html
// document.head.parentElement(): this method gives parent node of head i.e html
// there are four siblings method
// document.body.nextSibling(): this method will give next body node that can be either text or null
// document.body.previousSibling(): this method will give previous body node that can be text as output
// document.body.previousElementSibling(): this method gives now previous siblings i.e element as "head"
// document.body.nextElementSibling(): this methods gives next element present as output we can replace body with head too