import './App.css';

var x = 0;
var y = 0;

function fonksiyon(){

  x = Number(document.getElementById("inp1").value)
  y = Number(document.getElementById("inp2").value)
  document.getElementById("yazi").innerHTML = x+y
  document.body.style.backgroundColor = document.getElementById("inp3").value
}


function App() {
  return (
<div>
  <h1>Sayıları Toplama</h1>
  <input type="number" name="" id="inp1" onKeyUp={fonksiyon} placeholder='Birinci Sayı' />
  <input type="number" name="" id="inp2" onKeyUp={fonksiyon} placeholder='İkinci Sayı' />
  <br />
  <input type="text" name="" id="inp3" onKeyUp={fonksiyon} placeholder='Arka Plan Rengini Değiştir' />
  <br />
  <button onClick={fonksiyon}>Tıkla</button>
  <p id='yazi'></p>

</div>
  );
}

export default App;
