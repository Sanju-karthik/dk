let isCaptchaEnabled=false;

function beforesubmit(event){
if(isCaptchaEnabled){
let outputdate = document.querySelector(".outputdate");
let inputdate = document.querySelector(".inputdate");

console.log("inputdate.value", inputdate.value);

console.log("outputdate.value", outputdate.value); 

//date string -> date format
let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN");
 outputdate.value =formateddate;
}

else{
  alert("Please check the Captcha box to submit the lead");
  event.preventDefault();

}
}


function timestamp() {
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(newDate().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    }
    }
  setInterval(timestamp, 500); 

function reCaptchaTrue(){
  isCaptchaEnabled = true;

  }

