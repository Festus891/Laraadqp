function addmail(){
    const { convertArrayToCSV } = require('convert-array-to-csv');
    const fs = require('fs');
    var email = getElementById(email).value
 
const header = ['email address'];
const dataArrays = [
  [email]
  
];

 
const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
  header,
  separator: ','
});

fs.appendFile('mails.csv', csvFromArrayOfArrays, err => {
    if (err){
        console.log(18, err);
    }
    
    document.getElementById("myModal").style.display = "block";
})




}



 

var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("dismiss")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
