function showPopup(id) {
  document.getElementById(id).style.display = 'flex';
  document.body.style.overflow = 'hidden'; // tambah biar body ga scroll
}

function hidePopup(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openPaymentPopup() {
  document.getElementById("paymentPopup").style.display = "flex";
  document.body.style.overflow = 'hidden';
}

function closePaymentPopup() {
  document.getElementById("paymentPopup").style.display = "none";
  document.body.style.overflow = 'auto';
  document.getElementById("qrContainer").innerHTML = "";
}

function showQR(method) {
  const nomor = "0838-9273-0732";
  if (method === 'qris') {
    document.getElementById("qrContainer").innerHTML =
      '<img src="https://raw.githubusercontent.com/media-clouds/upload/id/6283892730732/mc1o0c3r.jpg" alt="QRIS" style="width:100%;max-width:400px;">';
  } else {
    navigator.clipboard.writeText(nomor).then(() => {
      document.getElementById("qrContainer").innerHTML =
        `Nomor ${method}: ${nomor}<br><small style="color:lightgreen;">Nomor telah disalin ke clipboard</small>`;
    }).catch(() => {
      document.getElementById("qrContainer").innerHTML =
        `Nomor ${method}: ${nomor}<br><small style="color:red;">Gagal menyalin nomor</small>`;
    });
  }
}