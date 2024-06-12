var generateBtn = document.querySelector('#btn').addEventListener('click', generateQr);
var spinner = document.querySelector('.fa');

function generateQr() {

  var Url = document.querySelector('#url').value;
  var heig = document.querySelector('#height').value;
  var wid = document.querySelector('#width').value;
  var color = document.querySelector('#color').value;

  if (Url == '' || height == '' || width == '') {
    alert('Fill reqired fields');
  }
  else {
    
    clear();
    setTimeout(()=>{
      spinner.style.display = 'none';
    var qrcode = new QRCode(document.getElementById("qr"), {
      text:Url,
      width:wid,
      height:heig,
      colorDark:color,
      colorLight: "#ffffff",
    });
    
    },2000);
  }
}
function clear(){
document.getElementById("qr").innerHTML='';
spinner.style.display = 'block';
}

