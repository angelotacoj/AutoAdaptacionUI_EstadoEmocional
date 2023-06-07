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

const isStep = (step) => location.pathname.includes(step)

const initStep0 = () => {
    if (!isStep('step-00.html')) return

    const affiliation = getAffiliation()
    if (affiliation) {
        const chosenMember = affiliation.member
        const chosenBtn = document.querySelector(`a.btn-big-icon.btn-shift[data-affiliation-member=${chosenMember}]`)
        // if (!chosenBtn) return
        chosenBtn?.classList.add('active')
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
    if (!isStep('step-01.html')) return

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
    if (!isStep('step-02.html')) return

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
        const age = ageElement.textContent
        
        updateAffiliation({ age })
    })
}

const initStep3 = () => {
    if (!isStep('step-03.html')) return

    const affiliation = getAffiliation()
    if (affiliation) {
        const chosenSmoke = affiliation.smoke
        const chosenBtn = document.querySelector(`a.btn-big-icon.btn-shift[data-affiliation-smoke=${chosenSmoke}]`)
        chosenBtn?.classList.add('active')
    }
    
    const btn = document.querySelector('a[href="step-04.html"]')
    if (!btn) return
    btn.addEventListener('click', (event) => {
        const active = document.querySelector('a.btn-big-icon.btn-shift.active')
        if (!active){
            event.preventDefault()
            return
        }

        const smoke = active.getAttribute('data-affiliation-smoke')
        updateAffiliation({ smoke })
    })
}

const initStep4 = () => {
    if (!isStep('step-04.html')) return

    const affiliation = getAffiliation()
    if (affiliation) {
        const chosenIllness = affiliation.illness
        const chosenBtn = document.querySelector(`a.btn-big-icon.btn-shift[data-affiliation-illness=${chosenIllness}]`)
        chosenBtn?.classList.add('active')
    }
    
    const btn = document.querySelector('a[href="step-05.html"]')
    if (!btn) return
    btn.addEventListener('click', (event) => {
        const active = document.querySelector('a.btn-big-icon.btn-shift.active')
        if (!active){
            event.preventDefault()
            return
        }

        const illness = active.getAttribute('data-affiliation-illness')
        updateAffiliation({ illness })
    })
}

const initStep6 = () => {
    if (!isStep('step-05.html')) return

    const affiliation = getAffiliation()
    if (affiliation) {
        const chosenCommunication = affiliation.communication
        const chosenBtn = document.querySelector(`a.btn-big-icon.btn-shift[data-affiliation-communication=${chosenCommunication}]`)
        chosenBtn?.classList.add('active')
    }
    
    const btn = document.querySelector('a[href="step-06.html"]')
    if (!btn) return
    btn.addEventListener('click', (event) => {
        const active = document.querySelector('a.btn-big-icon.btn-shift.active')
        if (!active){
            event.preventDefault()
            return
        }

        const communication = active.getAttribute('data-affiliation-communication')
        updateAffiliation({ communication })
    })
}


initStep0()
initStep1()
initStep2()
initStep3()
initStep4()
initStep6()