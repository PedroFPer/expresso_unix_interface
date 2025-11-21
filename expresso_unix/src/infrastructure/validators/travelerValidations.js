export class travelerValidations {

    static validateName(value) {
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
    }

    static validateCPF(value) {
        if (!value) return { valid: false, message: "Campo obrigatório" };
      
        const cpf = value.replace(/\D/g, "");
        if (cpf.length !== 11) return { valid: false, message: "CPF precisa ter 11 dígitos" };

        return { valid: true, message: "" };
    }



    static validateEmail(value) {
        if (!value) return { valid: false, message: "Campo obrigatório" };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim()))
            return { valid: false, message: "Email inválido" };

        return { valid: true, message: "" };
    }

    static validatePhoneNumber(value) {
        if (!value) return { valid: false, message: "Campo obrigatório" };

        const digits = value.replace(/\D/g, "");
        if (digits.length <= 10 || digits.length > 12)
            return { valid: false, message: "Telefone inválido" };

        return { valid: true, message: "" };
    }



    static validateField(fieldName, value) {
        switch (fieldName) {

            case "name":
                return this.validateName(value);

            case "email":
                return this.validateEmail(value);

            case "phoneNumber":
                return this.validatePhoneNumber(value);

            case "cpf":
                return this.validateCPF(value);

            default:
                return { valid: true, message: "" };
        }
    }

}
