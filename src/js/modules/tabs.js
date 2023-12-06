document.addEventListener('DOMContentLoaded', ()=> {
  const tabs = Array.from(document.querySelectorAll('[data-attr="tab"]'))
  const descs = Array.from(document.querySelectorAll('[data-role="tab-desc"]'))

  if(tabs && descs){
    tabs.forEach(tab => {
      const header = tab.querySelector('[data-role="tab-header"]')
      const desc = tab.querySelector('[data-role="tab-desc"]')
      header.addEventListener('click', ()=>{
        
        desc.classList.toggle('active')
      })
    })
  }
})