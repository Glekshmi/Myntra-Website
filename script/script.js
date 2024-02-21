function validates() {
	let phNo;
   phNo = document.getElementById("phNo").value;
   let lblError3;
   let maxLength = phNo.length;
   if (phNo == "") {
      document.getElementById("lblError3").innerHTML = "phone number field cannot be blank!";
   } else if (isNaN(phNo)) {
      document.getElementById("lblError3").innerHTML = "should contain digits only";
   } else if (maxLength < 10 || maxLength > 10) {
      document.getElementById("lblError3").innerHTML = "Number should contain atmost 10 digits";
   } else {
      document.getElementById("lblError3").innerHTML = "successfully logged in";
   }
}