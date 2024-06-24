function beforesubmit(){
let outputdate = document.querySelector(".outputdate");
let inputdate = document.querySelector(".inputdate");

console.log("inputdate.value", inputdate.value);

console.log("outputdate.value", outputdate.value); 

//date string -> date format
let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN");
 outputdate.value =formateddate;

 
}