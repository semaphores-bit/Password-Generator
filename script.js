var userInput = confirm("Please unchecked the box to choose the character types then click your selection, refresh if you want to generate other password selection");
function GeneratePassword() {
  var num = "0123456789";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "-=[]/~!@#$%^&*()_|:\"<>?";
  f = document.getElementById("passgen");
  var s = new String(f.pass.value);
  if(f.fn.checked) { s += num; } 
  if(f.fl.checked) { s += lower; } 
  if(f.fu.checked) { s += upper; } 
  if(f.fo.checked) { s += special; } 
  var p = new String();
  var slen = s.length;
  if(slen) { p = s.charAt(Math.floor(Math.random()*slen)); }
  
  if(slen) {
     for(var i=1; i<f.len.value; i++) {
        p += s.charAt(Math.floor(Math.random()*slen));
        }
     }
  f.pass.value = p;
  }
  
  function copyToClipboard() {
   /* Get the text field */
   var copyText = document.getElementById("pwd");
 
   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); 
 
   /* Copy the text inside the text field */
   document.execCommand("copy");
 
   /* Alert the copied text */
   alert("Copied the text: " + copyText.value);
  }