const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  // parseint is usefull if we give string then it returns NaN
  const weight=parseInt(document.querySelector('#weight').value)
  let resulttext=document.querySelector('#results')

  if(isNaN(height)||height<=0){
    resulttext.innerHTML="The Height is Invalid"
  }else if(isNaN(weight)||weight<=0){
    resulttext.innerHTML="The Weight is Invalid"
  }else{
    const BMIValue=(weight/((height*height)/10000)).toFixed(2)
    
    resulttext.innerHTML=BMIValue
    let nextdiv=document.createElement('div')
    if(BMIValue<18.6){
      let texnode=document.createTextNode("Under weight")
      nextdiv.appendChild(texnode)
    }else if(BMIValue>18.6&&BMIValue<24.9){
      let texnode=document.createTextNode("Normal weight")
      nextdiv.appendChild(texnode)
    }else{
      let texnode=document.createTextNode("Over weight")
      nextdiv.appendChild(texnode)
    }
    resulttext.appendChild(nextdiv)
  }
})