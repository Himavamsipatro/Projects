function rating()
{
    var elem = document.getElementById("Rating")
    if(elem.textContent==="")
         elem.textContent="⭐⭐⭐⭐";
    else 
          elem.textContent="";     
}