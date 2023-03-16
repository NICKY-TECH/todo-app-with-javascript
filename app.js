let input=document.querySelector('input');

let button=document.querySelector('button');

let container=document.querySelector('.todo-container');

button.addEventListener('click',async(event)=>{
event.preventDefault();

async function checkText(){
    if(input.value.length>0){
        let inputValue=input.value;
        input.value='';
    let todoLength=localStorage.length+1;
    let todo={
        item:inputValue,
        position:todoLength
    }
    localStorage.setItem(`${todoLength}`,JSON.stringify(todo));
    let fragment=new DocumentFragment();
    
    let todoPack=document.createElement('div');
    todoPack.classList.add('todo');
    const todoText=document.createElement('p');
    todoText.classList.add('entered-todo');
    todoText.setAttribute('id',`${todoLength}`);
    todoText.contentEditable='true';
    let buttonOne=document.createElement('button');
    let buttonTwo=document.createElement('button');
    buttonOne.classList.add('one');
    buttonTwo.classList.add('two');
    todoText.innerText=inputValue;
    let iconsContainer=document.createElement('div');
    iconsContainer.classList.add('icons');
    let iconOne=document.createElement('i');
    iconOne.classList.add('fa-regular', 'fa-pen-to-square');
    let iconTwo=document.createElement('i');
    iconTwo.classList.add('fa-solid', 'fa-trash-can');
    buttonOne.prepend(iconOne);
    buttonTwo.append(iconTwo);
    todoPack.prepend(todoText);
    iconsContainer.prepend(buttonOne);
    iconsContainer.append(buttonTwo);
    todoPack.append(iconsContainer);
    fragment.prepend(todoPack);
    container.prepend(fragment);
    

}
}
await checkText();

});


    let todoClick=document.querySelector('.todo-container');
    todoClick.addEventListener('click',(event)=>{
     if(event.target.classList.contains('fa-pen-to-square')){
     let newValue=event.target.parentElement.parentElement.parentElement.children[0].innerText;
     let indexValue=event.target.parentElement.parentElement.parentElement.children[0].id;
   localStorage.setItem(`${indexValue}`,JSON.stringify({
    item:newValue,
    position:indexValue
   }))
   console.log(newValue);
     
     }else if(event.target.classList.contains('one')){
        let newValue=event.target.parentElement.parentElement.children[0].innerText;
        let indexValue=event.target.parentElement.parentElement.children[0].id;
      let value=localStorage.getItem(`${indexValue}`);
      console.log(value);
      console.log(newValue);
      localStorage.setItem(`${indexValue}`,JSON.stringify({
        item:newValue,
        position:indexValue
       }))

     }
 


})

    todoClick.addEventListener('click',(event)=>{
     if(event.target.classList.contains('fa-trash-can')){
     let indexValue=event.target.parentElement.parentElement.parentElement.children[0].id;
     itemToBeRemoved=event.target.parentElement.parentElement.parentElement.remove();

   localStorage.removeItem(`${indexValue}`);
     
     }else if(event.target.classList.contains('two')){
        let indexValue=event.target.parentElement.parentElement.children[0].id;
        itemToBeRemoved=event.target.parentElement.parentElement.parentElement.remove();
       localStorage.removeItem(`${indexValue}`);
      

     }
 


})



window.addEventListener('load',async()=>{
  async function onLoad(){
    let fragment=new DocumentFragment();
    console.log(localStorage.length)
    for(let i=localStorage.length-1;i>=0;i--){
    
    let todoPack=document.createElement('div');
    todoPack.classList.add('todo');
    const todoText=document.createElement('p');
    todoText.classList.add('entered-todo');
    let indexNeeded=localStorage.key(i);
    todoText.innerText=JSON.parse(localStorage.getItem(indexNeeded)).item;
    todoText.contentEditable='true';
    let buttonOne=document.createElement('button');
    let buttonTwo=document.createElement('button');
    buttonOne.classList.add('one');
    buttonTwo.classList.add('two');
    let iconsContainer=document.createElement('div');
    iconsContainer.classList.add('icons');
    let iconOne=document.createElement('i');
    iconOne.classList.add('fa-regular', 'fa-pen-to-square');
    let iconTwo=document.createElement('i');
    iconTwo.classList.add('fa-solid', 'fa-trash-can');
    buttonOne.prepend(iconOne);
    buttonTwo.append(iconTwo);
    todoPack.prepend(todoText);
    iconsContainer.prepend(buttonOne);
    iconsContainer.append(buttonTwo);
    todoPack.append(iconsContainer);
    fragment.append(todoPack);
    
    


    }
    container.prepend(fragment);
  }
  await onLoad();
})


