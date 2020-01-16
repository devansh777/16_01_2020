var index = sessionStorage.getItem("count");
var allusers=[];
if (sessionStorage.getItem("users")==null) {
  index = 0;
  sessionStorage.setItem("users",JSON.stringify(allusers));
}
var name;
var english;
var maths;
var passingyr;
var tbl = "";
display();
student = function(name, english, maths, passingyear, createdate) {
  this.name = name;
  this.english = english;
  this.maths = maths;
  this.passingyear = passingyear;
  this.createdate = createdate;
  this.average;

  this.calculateavg = function() {
    this.average = (parseInt(this.english) + parseInt(this.maths)) / 2;
  };
};
function validation() {
  name = document.getElementById("txtname").value;
  english = document.getElementById("txtenglish").value;
  maths = document.getElementById("txtmaths").value;
  passingyr = document.getElementById("txtpassingyear").value;
  var regname = /^[a-zA-Z]*$/;
  var regmarks = /^[0-9]*$/;
  var flag = 0;
  if (name != "" && english != "" && maths != "" && passingyr != "") {
    if (!regname.test(name)) {
      alert("enter valide name");
      flag = 1;
    }
    if (
      !regmarks.test(english) ||
      parseInt(english) > 100 ||
      parseInt(english) < 0
    ) {
      alert("enter valide marks");
      flag = 1;
    }name
    if (!regmarks.test(maths) || parseInt(maths) > 100 || parseInt(maths) < 0) {
      alert("enter valide marks");
      flag = 1;
    }
    if (parseInt(passingyr) > 2020 || parseInt(passingyr) < 2000) {
      alert("Enter valid passing year");
      flag = 1;
    }
    if (flag == 0) {
      var d = new Date();
      crdate = d.getDay() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();
      user = new student(name, english, maths, passingyr, crdate);
      user.calculateavg();
      setdata();
      display();
    }
  } else {
    alert("all fields are required");
  }
}
function setdata() {
    
  allusers=JSON.parse(sessionStorage.getItem('users'));
  allusers.push(user);
  sessionStorage.setItem('users',JSON.stringify(allusers));
  display();
  window.sessionStorage.setItem("count", index);
}
function display() {
  alluser=JSON.parse(sessionStorage.getItem('users'));
  for (var count = 0;count<alluser.length; count++) {
    
    tbl +=
      "<tr><td>" +
      (count+1) +
      "</td><td>" +
      alluser[count].name +
      "</td><td>" +
      alluser[count].english +
      "</td><td>" +
      alluser[count].maths +
      "</td><td>" +
      alluser[count].average +
      "</td><td>" +
      alluser[count].passingyear +
      "</td><td>" +
      alluser[count].createdate +
      "</td></tr>";
  }
  document.getElementById("display").innerHTML = tbl;
  tbl = "";
}
