const year = document.getElementById("Year");
const mont = document.getElementById("month");
const date = document.getElementById("date");
const button = document.getElementById("button");
const rButton = document.getElementById("r-button");
const btn = document.getElementById("btn");
const kwasi = document.getElementById("kwasi");




function kan(year, month, date) {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("date").value;
  let mm = month;
  let dd = day;
  let yearArr = year.toString().split("");
  let cc = parseInt(yearArr.slice(0, 2).join(''));
  let yy = parseInt(yearArr.slice(2).join(''));
  let d = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
  return d


}
function name() {
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let weekDays = ["sunday", "monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let index = kan();
  let theName;
  if (weekDays[index] && button.checked) {
    theName = maleNames[index]
  }
  alert (theName);
  kwasi.innerHTML = theName;
  


}
button.addEventListener('click', () => {
  name();
  function validate(){
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("date").value;
  
    if( year === null || year<1){
      alert("please enter your correct year of birth")
    }
    if( month === null || month>12 || month<1){
      alert("please enter your correct month of birth")
    }
    if( day=== null || day >31 ||day<1 ){
      alert("please enter your correct day of birth")
    }
  }
})



