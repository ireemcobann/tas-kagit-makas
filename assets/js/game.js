let gamerCounter = 0;
let computerCounter = 0;

tas.addEventListener("click", tasHamlesi);
kagit.addEventListener("click", kagitHamlesi);
makas.addEventListener("click", makasHamlesi);

function bilgisayarHamlesi() {
  return ["Taş", "Kağıt", "Makas"][Math.floor(Math.random() * 3)];
}

function tasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Kağıt") {
    computerCounter++;
    bilgiHamlesi.innerText = hamle;
    bilgisayar.innerText = "Bilgisayar:" + computerCounter;
    kazanan.innerText = "BİlGİSAYAR kazandı";
  } else if (hamle === "Makas") {
    gamerCounter++;
    bilgiHamlesi.innerText = hamle;
    gamer.innerText = "Oyuncu:" + gamerCounter;
    kazanan.innerText = "OYUNCU kazandı";
  } else {
    bilgiHamlesi.innerText = hamle;
    kazanan.innerText = "BERABERE";
  }
}

function kagitHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Makas") {
    computerCounter++;
    bilgiHamlesi.innerText = hamle;
    bilgisayar.innerText = "Bilgisayar:" + computerCounter;
    kazanan.innerText = "BİLGİSAYAR kazandı";
  } else if (hamle === "Taş") {
    gamerCounter++;
    bilgiHamlesi.innerText = hamle;
    gamer.innerText = "Oyuncu:" + gamerCounter;
    kazanan.innerText = "OYUNCU kazandı";
  } else {
    bilgiHamlesi.innerText = hamle;
    kazanan.innerText = "BERABERE";
  }
}
function makasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Taş") {
    computerCounter++;
    bilgiHamlesi.innerText = hamle;
    bilgisayar.innerText = "Bilgisayar:" + computerCounter;
    kazanan.innerText = "BİLGİSAYAR kazandı";
  } else if (hamle === "Kağıt") {
    gamerCounter++;
    bilgiHamlesi.innerText = hamle;
    gamer.innerText = "Oyuncu:" + gamerCounter;
    kazanan.innerText = "OYUNCU kazandı";
  } else {
    bilgiHamlesi.innerText = hamle;
    kazanan.innerText = "BERABERE";
  }
}


resetButton.addEventListener("click", resetScores); 

function resetScores() {
  gamerCounter = 0; 
  computerCounter = 0; 
  
  gamer.innerText = "Oyuncu: " + gamerCounter; 
  bilgisayar.innerText = "Bilgisayar: " + computerCounter; 
  kazanan.innerText = ""; 
  bilgiHamlesi.innerText = "";
}

