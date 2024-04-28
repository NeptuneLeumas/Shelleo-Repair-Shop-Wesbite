// Script for navigation bar
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })    
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Script for Event
 var countDownDate = new Date("May 10, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("sale").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sale").innerHTML = "Browse Services";
  }
}, 1000);

// Script for search bar
document.addEventListener('DOMContentLoaded', () => { 
  
  const getSearchBar =  
      document.querySelector('#searchbar'); 
  const getAllSevices =  
      document.querySelectorAll('.pro'); 

  getSearchBar.addEventListener('keyup', e => { 
    getAllSevices.forEach(service => { 
          if (service.innerText.toLowerCase()
          .includes(e.target.value.toLowerCase())) { 
              service.style.display = 'block'; 
              return service; 
          } 
          else { 
              service.style.display = 'none'; 
          } 
      }); 
  }); 
});