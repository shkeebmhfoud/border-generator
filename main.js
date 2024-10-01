let width=0,style='dashed',color='black',dir='all';
let inputWidth=document.querySelector('input[type="range"]')
let targetDiv=document.getElementsByClassName('target')[0]
let styles=document.getElementsByClassName('border-styles')[0].children
let directions=document.getElementsByClassName('directions')[0].children
inputWidth.oninput=function(){
    inputWidth.previousElementSibling.textContent=this.value
    width=this.value
    console.log(width)
    update()
}
for(let i=0;i<styles.length;i++){
    styles[i].addEventListener('click',function(){
        document.getElementsByClassName('active')[0].classList.remove('active')
        this.classList.add('active')
        style=this.textContent
        update()
    })
}
for (let i=0;i<directions.length;i++){
    directions[i].addEventListener('click',function(){
        document.getElementsByClassName('active')[1].classList.remove('active')
        this.classList.add('active')
        dir = this.textContent
        width=0
        style='dashed'
        color='black'
        inputWidth.value='0'
        inputWidth.previousElementSibling.textContent = inputWidth.value
        
        update()
    })
}
function update(){
    if (dir=='all'){
        targetDiv.style.border=`${width}px ${style} ${color}`
    }else if(dir=='right'){
        targetDiv.style.borderRight = `${width}px ${style} ${color}`
    }else if(dir=='top'){
        targetDiv.style.borderTop = `${width}px ${style} ${color}`
    }else if(dir=='bottom'){
        targetDiv.style.borderBottom = `${width}px ${style} ${color}`
    }else{
        targetDiv.style.borderLeft = `${width}px ${style} ${color}`
    }
}



