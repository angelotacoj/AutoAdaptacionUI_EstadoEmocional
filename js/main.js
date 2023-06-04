Array.prototype.slice.call(document.querySelectorAll('.dropdown .dropdown-toggle')).forEach(function (dt) {
    dt.addEventListener('click', function (e) {
        dt.parentNode.classList.toggle('active');
    });
});

function enableButtonShiftByParent(id){
    let buttons = document.getElementById(id).querySelectorAll('a.btn-shift');
    Array.prototype.slice.call(buttons).forEach(function(btn){
        enableButtonShift(btn);
    });
}

function enableButtonShift(btn){
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let active = btn.parentNode.querySelector('a.btn-shift.active');
        if (active) active.classList.toggle('active');
        btn.classList.toggle('active');
    });
}

Array.prototype.slice.call(document.querySelectorAll('a.btn-shift')).forEach(function (btn) {
    enableButtonShift(btn);
});

function enableSelectionAgePicker(choice){
    choice.addEventListener('click', function (e) {
        let chosen = choice.parentNode.querySelector('.choice.chosen');
        chosen.classList.toggle('chosen');
        e.target.classList.toggle('chosen');
    });
}

Array.prototype.slice.call(document.querySelectorAll('.age-picker .picker .choice')).forEach(function (choice) {
    enableSelectionAgePicker(choice);
});

function enablePrevAgePicker(prev){
    prev.addEventListener('click', function (e) {
        e.preventDefault();
        let chosen = prev.parentNode.querySelector('.picker .choice.chosen');
        chosen.parentNode.scrollLeft = chosen.parentNode.scrollLeft - chosen.offsetWidth - 10;
        if (chosen.previousElementSibling) {
            chosen.classList.toggle('chosen');
            chosen.previousElementSibling.classList.toggle('chosen');
        }
    });
}

Array.prototype.slice.call(document.querySelectorAll('.age-picker .prev')).forEach(function(prev){
    enablePrevAgePicker(prev);
});

function enableNextAgePicker(next){
    next.addEventListener('click', function (e) {
        e.preventDefault();
        let chosen = next.parentNode.querySelector('.picker .choice.chosen');
        chosen.parentNode.scrollLeft = chosen.parentNode.scrollLeft + chosen.offsetWidth + 10;
        if (chosen.nextElementSibling) {
            chosen.classList.toggle('chosen');
            chosen.nextElementSibling.classList.toggle('chosen');
        }
    });
}

Array.prototype.slice.call(document.querySelectorAll('.age-picker .next')).forEach(function(next){
    enableNextAgePicker(next);
});

function enableEditOnDropdown(id){
    let dropdown = document.getElementById(id);
    let btns = dropdown.querySelectorAll('.edit, .dropped');
    Array.prototype.slice.call(btns).forEach(function(btn){
        btn.addEventListener('click', function (e) {
            btn.parentNode.classList.toggle('on-edit');
        });
    });
}

Array.prototype.slice.call(document.querySelectorAll('.affiliation-dropdown .edit')).forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        btn.parentNode.classList.toggle('on-edit');
    });
});

Array.prototype.slice.call(document.querySelectorAll('.affiliation-dropdown .dropped')).forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        btn.parentNode.parentNode.classList.toggle('on-edit');
    });
});

function enableSelectDropdown(id){
    let select = document.getElementById(id);
    // let toggle = select.querySelector('svg');
    // enableClickSelectToggle(toggle);
    enableClickSelect(select);
    let options = select.querySelectorAll('.options .option-w-icon');
    Array.prototype.slice.call(options).forEach(function(option){
        enableClickSelectOption(option);
    });
}

function enableClickSelectOption(option){
    option.addEventListener('click', function(e){
        console.log('Insert logic of select - option');
        // option.parentNode.parentNode.classList.toggle('open');
        // document.querySelector('.main-content').classList.toggle('w-select-open');
    });
}

// function enableClickSelectToggle(btn){
//     btn.addEventListener('click', function(e){
//         btn.parentNode.classList.toggle('open');
//         document.querySelector('.main-content').classList.toggle('w-select-open');
//     });
// }

function enableClickSelect(select){
    select.addEventListener('click', function(e){
        select.classList.toggle('open');
        document.querySelector('.main-content').classList.toggle('w-select-open');
    });
}

// Array.prototype.slice.call(document.querySelectorAll('.select-w-icon > svg')).forEach(function(btn){
//     enableClickSelectToggle(btn);
// });

Array.prototype.slice.call(document.querySelectorAll('.select-w-icon')).forEach(function(select){
    enableClickSelect(select);
});

Array.prototype.slice.call(document.querySelectorAll('.select-w-icon .options .option-w-icon')).forEach(function(option){
    enableClickSelectOption(option);
});

function loader(id){
    let loader = document.getElementById(id);
    loader.classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('blurred');
}

function removeById(id){
    document.getElementById(id).outerHTML = '';
}

function insertElementBefore(html, id){
    let target = document.getElementById(id);
    target.insertAdjacentHTML('beforebegin', html.trim());
}

Array.prototype.slice.call(document.querySelectorAll('.carousel .prev')).forEach(function(prev){
    let length = prev.parentNode.querySelectorAll('.carousel-card').length;
    prev.parentNode.querySelector('.carousel-log span + span').innerHTML = length + '';
    prev.addEventListener('click', function(e){
        if (prev.classList.contains('carousel-btn-disabled')) return;
        let active = prev.parentNode.querySelector('.carousel-card.active');
        let index = active.getAttribute('data-prev-index');
        let bg = prev.parentNode.querySelector('.carousel-card-bg-1');
        active.classList.toggle('prev-applied');
        prev.classList.toggle('carousel-btn-disabled');
        bg.classList.toggle('prev-applied');
        setTimeout(function(){
            prev.parentNode.querySelector('.carousel-log span').innerHTML = (parseInt(index) + 1) + '';
            active.classList.toggle('prev-applied');
            active.classList.toggle('active');
            prev.parentNode.querySelector('.carousel-card[data-index="' + index + '"]').classList.add('active');
            setTimeout(function(){
                bg.classList.toggle('prev-applied');
                prev.classList.toggle('carousel-btn-disabled');
            }, 1500);
        }, 1000);
    });
});

Array.prototype.slice.call(document.querySelectorAll('.carousel .next')).forEach(function(next){
    next.addEventListener('click', function(e){
        if (next.classList.contains('carousel-btn-disabled')) return;
        let active = next.parentNode.querySelector('.carousel-card.active');
        let index = active.getAttribute('data-next-index');
        let bg = next.parentNode.querySelector('.carousel-card-bg-2');
        active.classList.toggle('next-applied');
        next.classList.toggle('carousel-btn-disabled');
        bg.classList.toggle('next-applied');
        setTimeout(function(){
            next.parentNode.querySelector('.carousel-log span').innerHTML = (parseInt(index) + 1) + '';
            active.classList.toggle('next-applied');
            active.classList.toggle('active');
            next.parentNode.querySelector('.carousel-card[data-index="' + index + '"]').classList.add('active');
            setTimeout(function(){
                bg.classList.toggle('next-applied');
                next.classList.toggle('carousel-btn-disabled');
            }, 1500);
        }, 1000);
    });
});

Array.prototype.slice.call(document.querySelectorAll('.tabs .menu-tab a')).forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        if (btn.classList.contains('active')) return;
        let disabled = btn.parentNode.classList.contains('tabs-disabled');
        if (disabled) return;
        btn.parentNode.classList.toggle('tabs-disabled');
        btn.parentNode.querySelector('a.active').classList.toggle('active');
        btn.parentNode.parentNode.querySelector('.content-tab .info.active').classList.toggle('active');
        let index = btn.getAttribute('data-index');
        btn.classList.toggle('active');
        setTimeout(function(){
            btn.parentNode.parentNode.querySelector('.content-tab .info[data-index="' + index + '"]').classList.toggle('active');
            btn.parentNode.classList.toggle('tabs-disabled');
        }, 1000);
    });
});

Array.prototype.slice.call(document.querySelectorAll('.relative-dropdown .menu')).forEach(function(menu){
    menu.addEventListener('click', function(e){
        if (menu.parentNode.classList.contains('no-dropdown')) return;
        menu.parentNode.classList.toggle('toggled');
    });
});

Array.prototype.slice.call(document.querySelectorAll('.on-off .toggle')).forEach(function(toggle){
    toggle.addEventListener('click', function(e){
        toggle.parentNode.classList.toggle('on');
    });
});

function showModal(id){
    let modal = document.getElementById(id);
    modal.classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('blurred');
}

Array.prototype.slice.call(document.querySelectorAll('.modal .modal-close')).forEach(function(btn){
    btn.addEventListener('click', function(e){
        btn.parentNode.classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('blurred');
    });
});

function enableMouseMove(slider){
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener('mousedown', function(e){
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', function(){
        isDown = false;
    });

    slider.addEventListener('mouseup', function(){
        isDown = false;
    });

    slider.addEventListener('mousemove', function(e){
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
    });
}

function enableAgePicker(id){
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let slider = document.getElementById(id);

    enableMouseMove(slider.querySelector('.picker'));

    let choices = slider.querySelectorAll('.picker .choice');
    Array.prototype.slice.call(choices).forEach(function(choice){
        enableSelectionAgePicker(choice);
    });

    let prev = slider.querySelector('.prev');
    enablePrevAgePicker(prev);
    
    let next = slider.querySelector('.next');
    enableNextAgePicker(next);
}

let isDown = [];
let startX = [];
let scrollLeft = [];
let index = 0;
Array.prototype.slice.call(document.querySelectorAll('.picker')).forEach(function(slider){
    isDown.push(false);
    startX.push(0);
    scrollLeft.push(0);

    slider.addEventListener('mousedown', function(e){
        isDown[index] = true;
        startX[index] = e.pageX - slider.offsetLeft;
        scrollLeft[index] = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', function(){
        isDown[index] = false;
    });

    slider.addEventListener('mouseup', function(){
        isDown[index] = false;
    });

    slider.addEventListener('mousemove', function(e){
        if (!isDown[index]) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX[index]) * 3;
        slider.scrollLeft = scrollLeft[index] - walk;
    });

    index += 1;
});

Array.prototype.slice.call(document.querySelectorAll('input')).forEach(function(input){
    input.addEventListener('focus', function(e){
        document.querySelector('.form-content').classList.add('w-keyboard');
    });

    input.addEventListener('blur', function(e){
        document.querySelector('.form-content.w-keyboard').classList.remove('w-keyboard');
    });
});

document.addEventListener('keydown', function(e){
    if (e.key !== 'Escape') return;
    let modalActive = document.querySelector('.modal.active');
    if (modalActive) showModal(modalActive.getAttribute('id'));
});

if (document.querySelector('.comparison')){
    window.addEventListener('scroll', function(e){
        let firstChild = document.querySelector('.comparison .choices:first-child');
        let penultimateChild = document.querySelector('.comparison .choices:last-child').previousElementSibling;
        if (window.innerWidth <= 1285){
            if (window.pageYOffset >= 630){
                if (!firstChild.classList.contains('fixed')){
                    firstChild.classList.add('fixed');
                    penultimateChild.classList.add('last-choice');
                }
            }else{
                if (firstChild.classList.contains('fixed')){
                    firstChild.classList.remove('fixed');
                    penultimateChild.classList.remove('last-choice');
                }
            }
        }
    });
}

function disableClick(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
    });
}

Array.prototype.slice.call(document.querySelectorAll('.input-wrapper a')).forEach(function(btn){
    disableClick(btn);
}); 

function addHeading(html){
    if (document.querySelector('.heading-cpy')) return;
    const formInfoFixed =  document.querySelector('.form-grid .form-info.fixed-on-scroll');
    if (formInfoFixed){
        html = '<div class="heading-cpy">' + html + '</div>';
        if (formInfoFixed.childElementCount === 0) formInfoFixed.innerHTML = html;
        else document.querySelector('.form-grid .form-info.fixed-on-scroll > *:nth-child(1)').insertAdjacentHTML('beforebegin', html);
    }
}

function removeHeading(){
    const cpy = document.querySelector('.heading-cpy');
    if (!cpy) return;
    cpy.parentNode.removeChild(cpy);
}

window.addEventListener('scroll', function (e) {
    let formStep = document.querySelector('.form-step');
    let formHeading = document.querySelector('.form-grid .form-heading');

    if (window.innerWidth > 1025){
        if (formHeading) {
            if (formStep.offsetHeight > 850) {
                if (window.pageYOffset > 80) {
                    if (!formHeading.classList.contains('fixed')) {
                        formHeading.classList.add('fixed');
                        addHeading(formHeading.innerHTML);
                    }
                } else {
                    if (formHeading.classList.contains('fixed')) {
                        formHeading.classList.remove('fixed');
                        removeHeading();
                    }
                }
            } else {
                if (formHeading.classList.contains('fixed')) {
                    formHeading.classList.remove('fixed');
                    removeHeading();
                }
            }
        }
        let formInfoToScroll = document.querySelector('.form-grid .form-info.fixed-on-scroll');
        if (formInfoToScroll) {
            if (formStep.offsetHeight > 850) {
                if (window.pageYOffset > 80) {
                    if (!formInfoToScroll.classList.contains('fixed')) {
                        formInfoToScroll.classList.add('fixed');
                        formInfoToScroll.style.top = 'calc(8% + ' + formHeading.getBoundingClientRect().height + 'px)';
                    }
                } else {
                    if (formInfoToScroll.classList.contains('fixed')) {
                        formInfoToScroll.classList.remove('fixed');
                    }
                }
            } else {
                if (formInfoToScroll.classList.contains('fixed')) {
                    formInfoToScroll.classList.remove('fixed');
                }
            }
            if (window.pageYOffset > formStep.offsetHeight - 700){
                if (formInfoToScroll.classList.contains('fixed')){
                    if (!formInfoToScroll.classList.contains('absoluted')){
                        const formInfoFixed =  document.querySelector('.form-grid .form-info.fixed-on-scroll');
                        if (formInfoFixed.offsetHeight > 300){
                            formInfoToScroll.classList.add('absoluted');
                            formHeading.classList.add('absoluted');
                            formInfoToScroll.style.top = 'auto';
                        }
                    }
                } 
            }else{
                if (formInfoToScroll.classList.contains('absoluted')){
                    formInfoToScroll.classList.remove('absoluted');
                    formInfoToScroll.style.top = 'calc(8% + ' + formHeading.getBoundingClientRect().height + 'px)';
                    formHeading.classList.remove('absoluted');
                }
            }
        }
    }
});

Array.prototype.slice.call(document.querySelectorAll('.btn-no-load')).forEach(function(btn){
    disableClick(btn);
});

function changeButtonWithLeftIcon(id, icon, text){
    let btn = document.getElementById(id);
    if (!btn.classList.contains('btn-icon-left')) return;
    btn.innerHTML = icon + text;
}

function handleAffiliationChoice(id, text){
    let choice = document.getElementById(id);
    if (!choice.classList.contains('choice')) return;
    choice.querySelector('h6').innerHTML = text;
    choice.classList.toggle('w-info'); 
}

function pickAge(id, age){
    if (!document.getElementById(id)) return;
    let picker = document.getElementById(id).querySelector('.picker');
    let choices = picker.querySelectorAll('.choice');
    if (choices.length <= age) return;
    picker.scrollLeft = age * 67 - picker.offsetWidth/2;
    picker.querySelector('.choice.chosen').classList.remove('chosen');
    Array.prototype.slice.call(choices).filter(function(choice){
        return choice.textContent === (age + '');
    }).forEach(function(choice){
        choice.classList.add('chosen');
    });
}

Array.prototype.slice.call(document.querySelectorAll('.see-prices')).forEach(function(a){
    a.addEventListener('click', function(e){
        document.querySelector('.form-heading').scrollIntoView({
            behavior: 'smooth'
          });
    });
});