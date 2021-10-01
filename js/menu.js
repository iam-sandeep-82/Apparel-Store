var mobile_nav=document.querySelector('nav.navigation-content')


function myFunction(x) {
  x.classList.toggle("change");
  if (x.classList.contains('change')){
    mobile_nav.classList.replace('hide-me','show-me')
    mobile_nav.classList.add('fold')
  }
  else{
    mobile_nav.classList.replace('show-me','hide-me')
    mobile_nav.classList.remove('fold')
  }
}