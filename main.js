const details = document.querySelectorAll('details')
details.forEach(item => {
    item.addEventListener('click', function() {
      const pTag = this.querySelector('p')
      const iconPlus = this.querySelector('[data-icon-plus]')
      const iconMinus = this.querySelector('[data-icon-minus]')
      if(pTag.style.display === 'block'){
        pTag.style.display = 'none'
        iconPlus.classList.remove('d-none')
        iconMinus.classList.add('d-none')
    }
      else{
        pTag.style.display = 'block'
        iconPlus.classList.add('d-none')
        iconMinus.classList.remove('d-none')
    }
    });
});