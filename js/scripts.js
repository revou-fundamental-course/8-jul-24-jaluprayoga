const hasilOutputElement = document.querySelector("#hasil-output");
const totalElement = document.querySelector("#total");
const kategoriElement = document.querySelector("#kategori");
const hasilKategoriElement = document.querySelector("#hasil-kategori");
const hasilAnjuranElement = document.querySelector("#hasil-anjuran");
const hasilPenyakitElement = document.querySelector("#hasil-penyakit");
const hasilContentElement = document.querySelector("#hasil-content");
const hasilFooterElement = document.querySelector("#hasil-footer");
const keyArr = ["kategori", "pesan", "anjuran", "penyakit"];
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

  // TODO: hitung BMI
  const bmi = (berat / (tinggi / 100) ** 2).toFixed(2);

  // TODO: cek kategori
  if (bmi < 18.5) {
    kategori = outputArr[0].kategori;
    pesan = outputArr[0].pesan;
    anjuran = outputArr[0].anjuran;
    penyakit = outputArr[0].penyakit;
  }
  if (bmi > 18.5 && bmi < 24.9) {
    kategori = outputArr[1].kategori;
    pesan = outputArr[1].pesan;
    anjuran = outputArr[1].anjuran;
    penyakit = outputArr[1].penyakit;
  }
  if (bmi > 24.9 && bmi < 29.9) {
    kategori = outputArr[2].kategori;
    pesan = outputArr[2].pesan;
    anjuran = outputArr[2].anjuran;
    penyakit = outputArr[2].penyakit;
  }
  if (bmi > 29.9) {
    kategori = outputArr[3].kategori;
    pesan = outputArr[3].pesan;
    anjuran = outputArr[3].anjuran;
    penyakit = outputArr[3].penyakit;
  }

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
  hasilAnjuranElement.innerHTML = null;
  hasilKategoriElement.innerHTML = null;
  hasilPenyakitElement.innerHTML = null;
  hasilContentElement.style.display = "none";
  hasilFooterElement.style.display = "none";
  hasilOutputElement.innerHTML = `<p>Silahkan isi form terlebih dahulu</p>`;
}
