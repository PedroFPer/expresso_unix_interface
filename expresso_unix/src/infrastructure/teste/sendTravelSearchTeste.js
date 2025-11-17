export function sendTravelSearchTeste(formData) {
    console.log("Recebido pela fake API:", formData);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "success",
                message: "Dados recebidos com sucesso!",
                received: formData
            });
        }, 1500); // simula atraso de rede
    });
}