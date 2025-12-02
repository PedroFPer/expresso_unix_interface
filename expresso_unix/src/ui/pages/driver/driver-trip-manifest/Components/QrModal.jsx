import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./QrModal.css";

export default function QrModal({ open, onClose }) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (!open) return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => setData(decodedText),
      () => {}
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="qr-overlay">
      <div className="qr-modal">
        <h2>Leitor de QR Code</h2>

        <div id="qr-reader" className="qr-camera"></div>

        <p className="qr-result">{data || "Aponte para um QR..."}</p>

        <div className="qr-divider">ou</div>

        <label className="qr-upload-btn">
          Selecionar imagem
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImage(e, setData)}
            hidden
          />
        </label>

        <button className="qr-close" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

async function handleImage(e, setData) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => decode(reader.result, setData);
  reader.readAsDataURL(file);
}

async function decode(image, setData) {
  const { default: jsQR } = await import("jsqr");

  const img = new Image();
  img.src = image;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    setData(code ? code.data : "Nenhum QR encontrado");
  };
}
