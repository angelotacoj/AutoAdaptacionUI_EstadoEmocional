console.log('state.js')

const getAffiliation = () => {
    const affliationString = localStorage.getItem('affilliaton')
    const affiliation = JSON.parse(affliationString)
    return affiliation
}

const updateAffiliation = (step) => {
    const affiliation = getAffiliation()
    const updatedAffliation = { ...affiliation, ...step }
    const updatedAffliationString = JSON.stringify(updatedAffliation)
    localStorage.setItem('affilliaton', updatedAffliationString)
}

/*

{
    member: 'me',
    name: 'Angelo',
    age: 12
}

{ member: 'me'} + { name: 'gbhnjm,'} = {}


*/

const initStep0 = () => {
    const affiliation = getAffiliation()
    if (affiliation) {
        const chosenMember = affiliation.member
        const chosenBtn = document.querySelector(`a.btn-big-icon.btn-shift[data-affiliation-member=${chosenMember}]`)
        if (!chosenBtn) return
        chosenBtn.classList.add('active')
    }
    
    const btn = document.querySelector('a[href="step-01.html"]')
    if (!btn) return
    btn.addEventListener('click', (event) => {
        const active = document.querySelector('a.btn-big-icon.btn-shift.active')
        if (!active){
            event.preventDefault()
            return
        }

        const member = active.getAttribute('data-affiliation-member')
        updateAffiliation({ member })
    })
}

const initStep1 = () => {
    const nameInput = document.getElementById('name')
    if (!nameInput) return

    const affiliation = getAffiliation()
    if (affiliation){
        const chosenName = affiliation.name
        nameInput.value = chosenName
    }

    const btn = document.querySelector('a[href="step-02.html"]')
    if (!btn) return
    btn.addEventListener('click', (event) => {
        const name = nameInput.value
        if (name === ''){
            event.preventDefault()
            return
        }

        updateAffiliation({ name })
    })
}

const initStep2 = () => {
    const affiliation = getAffiliation()
    if (affiliation){
        const helloElement = document.getElementById('hello')
        if (!helloElement) return
        helloElement.textContent = `Hola ${affiliation.name},`

        const currentAge = affiliation.age
        const currentAgeElement = document.querySelector(`.age-picker .picker .choice[data-age="${currentAge}"]`)
        if (currentAgeElement){
            currentAgeElement.click()
            currentAgeElement.scrollIntoView({ block: 'end', behavior: 'smooth' })
        }
    }

    
    const btn = document.querySelector('a[href="step-03.html"]')
    if (!btn) return
    btn.addEventListener('click', (event) => {
        const ageElement = document.querySelector('.age-picker .picker .choice.chosen')
        console.log('ageElement =', ageElement)
        const age = ageElement.textContent
        
        updateAffiliation({ age })
    })
}

initStep0()
initStep1()
initStep2()