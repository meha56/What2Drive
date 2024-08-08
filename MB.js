var div = document.getElementsByClassName('model-details-Coupe');
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
var div1 = document.getElementsByClassName('model-details-GLE');
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
var div2 = document.getElementsByClassName('model-details-e-class');
var display = 0;
function hideShow2()
{
    if(display == 1)
    {
      div2[0].style.display = 'block';
      display = 0;    
    }
    else
    {
      div2[0].style.display = 'none';
      display = 1;    
    }
}