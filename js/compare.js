function handleProgramDt(e){
    const dt = e.currentTarget.parentNode.parentNode;
    dt.classList.toggle('active');
}

Array.prototype.slice.call(document.querySelectorAll('.program-c-dt-h button'))
    .forEach(function(btn){
        btn.addEventListener('click', handleProgramDt);
    });

window.addEventListener('scroll', function(e){
    let top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
    let footer = document.querySelector('.program-c-f');
    if (top > 100){
        footer.classList.add('fixed');
    }else{
        footer.classList.remove('fixed');
    }
});