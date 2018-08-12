const framescroll = document.getElementById('frame scroll')
const roo = document.querySelector(':root')
framescroll.addEventListener('click', print)
framescroll.addEventListener('input', drag)

function print(e){
    console.log('clicked')
    console.log({e})
    console.log({roo})
}

function drag(){
    console.log(this.value)
    roo.style.setProperty('--frame-top', this.value + '%')
}