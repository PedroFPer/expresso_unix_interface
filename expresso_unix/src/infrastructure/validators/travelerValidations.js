export class travelerValidations {
    static validateField(fieldName, value) {
        switch (fieldName) {
            case "name":
                const trimmed = typeof value === "string" ? value.trim() : "";
                if (!trimmed) return { valid: false, message: "Campo obrigatório" };

                const lettersOnly = trimmed.replace(/\s+/g, '');
                if (lettersOnly.length < 5) return { valid: false, message: "Deve conter pelo menos 5 letras" };
                if (lettersOnly.length > 50) return { valid: false, message: "Deve conter no máximo 50 letras" };

                const words = trimmed.split(/\s+/);
                if (words.length < 2) return { valid: false, message: "Nome completo deve conter sobrenome" };

                const nameRegex = /^[A-Za-zÀ-ÿ]+$/;
                for (let word of words) {
                    if (!nameRegex.test(word)) return { valid: false, message: "Apenas letras são permitidas" };
                }

                return { valid: true, message: "" };

                default:
                    return { valid: true, message: "" };

        }
    }
}
