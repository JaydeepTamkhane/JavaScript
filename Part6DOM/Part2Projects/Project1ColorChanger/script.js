const buttons=document.querySelectorAll('.button')


buttons.forEach(function(button){
  button.addEventListener('click',(event)=>{
    if(event.target.id==='grey'){
      document.body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==='white'){
      document.body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==='blue'){
      document.body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==='yellow'){
      document.body.style.backgroundColor=event.target.id;
    }
  })
})