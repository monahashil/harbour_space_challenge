// convert text to circle shape
$(document).ready(function() {
    let circle = new CircleType(document.getElementById('circle'));
    circle.raduis(360);
});
////////////////////////////////////
// application closes calculation
var deadline = new Date('Nov 24, 2022').getTime();
setInterval(function(){
  var now = new Date().getTime();
  var today = deadline - now;
  // calulate difference days, hrs, min, sec
  var Days = Math.floor(today / (1000*60*60*24));
  var Hrs = Math.floor((today % (1000*60*60*24))/(1000*60*60));
  var Min = Math.floor((today % (1000*60*60))/(1000*60));
  var Sec = Math.floor((today % (1000*60))/1000);
  // shows difference
  document.getElementsByClassName ("Days")[0].innerHTML = Days;
  document.getElementsByClassName ("Hrs")[0].innerHTML = Hrs;
  document.getElementsByClassName ("Min")[0].innerHTML = Min;
  document.getElementsByClassName ("Sec")[0].innerHTML = Sec;
},1000); 
// show questions divs
$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $("." + optionValue).show();
                if (optionValue == "all"){
                    $(".selected").not("." + optionValue).show();
                }
                else {
                $(".selected").not("." + optionValue).hide();
               } 
            } 
            else{
                $(".selected").hide();
            }
        });
    }).change();
});
//////////////////////
// click on button
function buttonTheme(el){
    var m = el.className.match(/button(\d+)/);
    parameter = m[1];
    var value = el.value;
    if (value == "+") {
        document.getElementById(`button${parameter}`).style.backgroundColor="#3C237F";
        document.getElementById(`button${parameter}`).value = '-';
        document.getElementById(`button${parameter}`).textContent = '-';
        document.getElementById(`answer${parameter}`).style.display = "block";
        clicks += 1;
    }
    else{
        document.getElementById(`button${parameter}`).style.backgroundColor="transparent";
        document.getElementById(`button${parameter}`).value = '+';
        document.getElementById(`button${parameter}`).textContent = '+';
        document.getElementById(`answer${parameter}`).style.display = "none";
        clicks = 0;
    }
}
////////////////////
// slider show
var screen = screen.width;
if (screen >= 1024){
    $(document).ready(function() {
        $(".carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
    
            }
        });
    });
}
else{
    $(document).ready(function() {
        $(".carousel").owlCarousel({
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
            0:{
                items:1,
                nav: false
            },
    
            }
        });
    });
}
/////////////////////////////
// API featch
fetch(
    "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab").then(res =>{
      return res.json();
    })
    .then(json => {
      var paragraph = json.scholarship.about;
      document.getElementById('api').innerHTML = paragraph[0].data;
    })
