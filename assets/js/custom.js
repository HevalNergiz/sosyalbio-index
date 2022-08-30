var degrade_color_secici_1= document.getElementById('colorhead');
var degrade_color_secici_2= document.getElementById('colorhead-1');
var degrade_yonlendirme_secici= document.getElementById('yonlendirici');
var degrade_kutusu= document.getElementById('degradediv');
var solid_color_secici= document.getElementById('colorhead-2');
var solid_kutusu= document.getElementById('soliddiv');
//degrade ve background atamak için aşşağıdaki fonksiyonları yazdım ve sizin inputlarınızda onchange(seçim olunca) ile çağırdım.
function setDegrade(){
    var degrade_yonlendirme=degrade_yonlendirme_secici.value;
    var degrade_color_1=degrade_color_secici_1.value;
    var degrade_color_2=degrade_color_secici_2.value;
    degrade_kutusu.style.backgroundImage="linear-gradient(to "+degrade_yonlendirme+","+degrade_color_1+", "+degrade_color_2+")";
}
function setSolid(){
    var solid_Color=solid_color_secici.value;
    solid_kutusu.style.backgroundColor=solid_Color;
}
// sayfa yüklenince de fonksiyonları çalıştırma kodları aşağıda
window.onload = () =>{
    setDegrade();
    setSolid();
}


    const frame = document.getElementById('frame');
    const file = document.getElementById('file');
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      frame.style.backgroundImage = `url(${ reader.result })`;
    }, false);
    file.addEventListener('change',function() {
      const image = this.files[0];
      if(image) reader.readAsDataURL(image);
    }, false)