
var div = document.getElementsByClassName('model-details-MX-5');
var display = 0;
function hideShow()
{
    if(display == 1)
    {
      div[0].style.display = 'block';
      display = 0;    
    }
    else
    {
      div[0].style.display = 'none';
      display = 1;    
    }
}
var div1 = document.getElementsByClassName('model-details-CX-5');
var display = 0;
function hideShow1()
{
    if(display == 1)
    {
      div1[0].style.display = 'block';
      display = 0;    
    }
    else
    {
      div1[0].style.display = 'none';
      display = 1;    
    }
}
var div2 = document.getElementsByClassName('model-details-Mazda6-Sedan');
var display = 0;
function hideShow2()
{
    if(display == 1)
    {
      div2[0].style.display = 'none';
      display = 0;    
    }
    else
    {
      div2[0].style.display = 'block';
      display = 1;    
    }
}


var typed = new typed(".auto_type", {
    strings: ["Japanese multinational automotive manufacturer", "Mazda Motor Corporation"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  })