function isiForm() {
  document.querySelector('#buy-input').value = "0.1"; //  buy input 0.1
}

function klikDiKoordinat(x, y) {
  const event = new MouseEvent('click', {
    clientX: x,
    clientY: y,
    bubbles: true,
    cancelable: true,
  });

  document.elementFromPoint(x, y).dispatchEvent(event);
}

function klikTombol(selector) {
  const tombol = document.querySelector(selector);
  if (tombol) {
    tombol.click();
  }
}

function prosesAutomatis() {
  let count = 0;

  function lakukanProses() {
    if (count >= 10) return; // Change '10' with how many looping do you want
    isiForm();

    klikTombol('button[type="submit"].trade-button');
    
    setTimeout(() => {

      klikTombol('button[type="button"].trade-button');
      
      count++;
      
      setTimeout(lakukanProses, 4000); // Delay 4 seconds after looping
    }, 2000); // Delay 2 to click "Confirm action"
  }

  lakukanProses();
}

prosesAutomatis();
