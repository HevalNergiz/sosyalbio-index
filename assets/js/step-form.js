var sayfa1 = document.getElementById('birinciasama'); 
var sayfa2 = document.getElementById('ikinciasama'); 
var sayfa3 = document.getElementById('ucuncuasama'); 

function birinciyegecis(){
 sayfa2.classList.add('hidden');
 sayfa1.classList.remove('hidden');
 sayfa3.classList.add('hidden');
    }

function ikinciyegecis(){
 sayfa1.classList.add('hidden');
 sayfa2.classList.remove('hidden');
 sayfa3.classList.add('hidden');
    }
function ucuncuyegecis(){
 sayfa3.classList.remove('hidden');
 sayfa2.classList.add('hidden');
    }