// Randomize the jumbotron background
const gradients = ['bg-1', 'bg-2', 'bg-3', 'bg-4']
const randomGradient = Math.floor(Math.random() * gradients.length) + 1

document.querySelector('.jumbotron').classList.add(gradients[randomGradient - 1])

// Render multiple svgs
const now = Date.now()
document.querySelectorAll('.pictogram').forEach((e, i) => {
  const theme = e.getAttribute('data-theme');
  fetchAvatar(now + 'pictogram' + i * Math.random(),e,theme);
  
})

// Listen the query event
const queryInput = document.querySelector('.query')
const queryAvatar = document.querySelector('.avatar-query')

queryInput.addEventListener('keyup', function (e) {
  const theme = queryAvatar.getAttribute('data-theme')
  const value = queryInput.value && queryInput.value.length > 0 ? queryInput.value : 'pictogram'
  fetchAvatar(value,queryAvatar,theme);
})


function fetchAvatar(query,element,theme="monsters"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          response = JSON.parse(this.responseText);
          element.innerHTML = response.svg;
      }
    };
    xhttp.open(
        "GET",
        'http://localhost:3000/image/'+query,
        true
    );
    xhttp.send();
    return;
}