  const alls = document.querySelectorAll('.all');

  function toggleOpenPanels(e){
    alls.forEach(all => {all.classList.remove('open'); console.log("ALL: ",all);})

    for(let child in e.target.parentElement.children){
      if(e.target.parentElement.children.hasOwnProperty(child)){
        e.target.parentElement.children[child].classList.add('open')
        e.target.classList.add('open')
      }
    }
    e.target.classList.add('open')
    e.target.parentElement.classList.add('open')
    e.stopPropagation()
  }


  alls.forEach(all => all.addEventListener('click', toggleOpenPanels))
