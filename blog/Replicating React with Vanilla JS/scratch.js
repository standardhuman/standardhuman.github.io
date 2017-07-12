function makeElement(type, content){
    const el = document.createElement(type)
    const node = el
}
const h1 = () => makeElement('h1')
document.body.appendChild(h1())
console.log(h1);
