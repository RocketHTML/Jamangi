const framescroll = document.getElementById('frame scroll')
const roo = document.querySelector(':root')
const frame = document.getElementById('frame')

framescroll.addEventListener('input', drag)

populate()



function drag(){
    console.log(this.value)
    roo.style.setProperty('--frame-top', this.value + '%')
}

function populate(){

    for (let i = 0; i < 50; i++){
        card = document.createElement('div'); card.className = 'card img'
        img = document.createElement('div'); img.className = 'card'
        desc = document.createElement('div'); desc.className = 'card'
        card.appendChild(img); card.appendChild(desc);

        frame.appendChild(card)
    }
}