import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import "../styles/QrModal.css";

export default function QrModal({ open, onClose, onRead }) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (!open) return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        setData(decodedText);
        onRead?.(decodedText);
        
      },
      () => {}
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [open]);

  if (!open) return null;

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      decodeImage(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const decodeImage = async (image) => {
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
      const result = code ? code.data : null;
      setData(result || "Nenhum QR encontrado");
      onRead?.(result);
      
      
    };
  };

  return (
    <div className="qr-modal-overlay">
      <div className="qr-modal">
        <button className="qr-close-btn" onClick={onClose}>×</button>

        <h2>Escanear QR Code</h2>

        <div id="qr-reader"></div>

        <label className="qr-upload">
          Ler imagem
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>

        <p className="qr-result">{data}</p>
      </div>
    </div>
  );
}
