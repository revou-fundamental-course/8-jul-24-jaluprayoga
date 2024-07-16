const elements = (selector) => {
  return document.querySelector(selector);
};
const hasilOutputElement = elements("#hasil-output");
const hasilKategoriElement = elements("#hasil-kategori");
const hasilAnjuranElement = elements("#hasil-anjuran");
const hasilPenyakitElement = elements("#hasil-penyakit");
const hasilContentElement = elements("#hasil-content");
const hasilFooterElement = elements("#hasil-footer");
const outputArr = [
  {
    kategori: "Kekurangan Berat Badan",
    pesan: "Anda kekurangan berat badan",
    anjuran: "perlu meningkatkan berat badan",
    penyakit: [" Lapar", " Kurang Uang", " Bete", " Depresi"],
  },
  {
    kategori: "Normal (Ideal)",
    pesan: "Selamat berat badan anda ideal!",
    anjuran: "tidak perlu ngapa-ngapain",
    penyakit: [" Sehat"],
  },
  {
    kategori: "Kelebihan Berat Badan",
    pesan: "Anda memiliki berat badan berlebih",
    anjuran: "perlu menurunkan berat badan",
    penyakit: [" Hipertensi", " Sakit Jantung", " Osteoarthritis"],
  },
  {
    kategori: "Kegemukan (Obesitas)",
    pesan: "Wah anda obesitas, segera konsultasikan ke dokter",
    anjuran: "perlu menurunkan berat badan secara extreme",
    penyakit: [" Diabetes", " Berat Jalan", " Jantung"],
  },
];

function handleSubmit(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd);
  const { berat, tinggi } = data;
  let index = 0;

  // TODO: hitung BMI
  const bmi = (berat / (tinggi / 100) ** 2).toFixed(2);

  if (bmi < 18.5) {
    index = 0;
  } else if (bmi > 18.5 && bmi < 24.9) {
    index = 1;
  } else if (bmi > 24.9 && bmi < 29.9) {
    index = 2;
  } else if (bmi > 29.9) {
    index = 3;
  }

  kategori = outputArr[index].kategori;
  pesan = outputArr[index].pesan;
  anjuran = outputArr[index].anjuran;
  penyakit = outputArr[index].penyakit;

  // TODO: update UI
  hasilOutputElement.innerHTML = `<h4>${kategori}</h4><h1 class="bmi">${bmi}</h1><p>${pesan}</p> <button class="button">Download Hasil BMI</button>`;

  hasilAnjuranElement.innerHTML = `${anjuran}`;
  hasilKategoriElement.innerHTML = `${kategori}`;
  hasilPenyakitElement.innerHTML = `${penyakit}`;
  hasilContentElement.style.display = "flex";
  hasilFooterElement.style.display = "flex";
}
function reset() {
  document.querySelector("#berat-input").value = null;
  document.querySelector("#tinggi-input").value = null;
  [hasilAnjuranElement, hasilKategoriElement, hasilPenyakitElement].innerHTML =
    null;
  hasilContentElement.style.display = "none";
  hasilFooterElement.style.display = "none";
  hasilOutputElement.innerHTML = `<p>Silahkan isi form terlebih dahulu</p>`;
}
