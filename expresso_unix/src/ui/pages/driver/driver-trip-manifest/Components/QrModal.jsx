import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState, useRef } from "react";
import "../styles/QrModal.css";

export default function QrModal({ open, onClose, onRead }) {
  const [data, setData] = useState("");
  const [scanning, setScanning] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    if (!open) stopScanner(); 
  }, [open]);

  const startScanner = async () => {
    if (scanning) return;

    const html5Qr = new Html5Qrcode("qr-reader");
    qrRef.current = html5Qr;

    try {
      setScanning(true);

      await html5Qr.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          setData(decodedText);
          onRead?.(decodedText);
        }
      );
    } catch (err) {
      console.error("Erro ao iniciar câmera", err);
      setScanning(false);
    }
  };

  const stopScanner = async () => {
    if (!qrRef.current) return;
    try {
      await qrRef.current.stop();
      await qrRef.current.clear();
    } catch (e) {}
    qrRef.current = null;
    setScanning(false);
  };

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

      const result = code ? code.data : "Nenhum QR encontrado";
      setData(result);
      onRead?.(result);
    };
  };

  if (!open) return null;

  return (
    <div className="qr-modal-overlay">
      <div className="qr-modal">
        <button className="qr-close-btn" onClick={() => { stopScanner(); onClose(); }}>
          ×
        </button>

        <h2>Escanear QR Code</h2>

        <div id="qr-reader" style={{ width: "100%", minHeight: 250 }}></div>

        {!scanning && (
          <button className="qr-open-camera-btn" onClick={startScanner}>
            Abrir câmera
          </button>
        )}

        {scanning && (
          <button className="qr-stop-camera-btn" onClick={stopScanner}>
            Fechar câmera
          </button>
        )}

        <label className="qr-upload">
          Ler imagem
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>

        <p className="qr-result">{data}</p>
      </div>
    </div>
  );
}
