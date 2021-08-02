document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-toggler'),
    navbarMenu = document.querySelector('#collapsible'),
    form = document.querySelector('.msg-form');

  burger.addEventListener('click', () => {
    burger.classList.toggle('expanded')
    navbarMenu.classList.toggle('expanded')
  })

  const ajaxSend = async (formData) => {
    const fetchResp = await fetch('main.php', {
        method: 'POST',
        body: formData
    });
    if (!fetchResp.ok) {
        return 'Ошибка'
    } else {
      return await fetchResp.json();
    }    
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      ajaxSend(new FormData(form)).then((response) => {
        console.log(response)
        form.reset()
      })
    })
  }

})