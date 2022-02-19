var result = document.getElementById('result')
let data = localStorage.getItem('data')
result.innerHTML = data.replace(/,/gi, '<br>')