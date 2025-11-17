export class travelerValidations {
    static result(valid, message = "") {
        return { valid, message };
    }


    static validateName(name) {
        if (!name || typeof name !== "string") {
            return this.result(false, "Campo obrigatório");
        }

        const trimmed = name.trim();
        if (!trimmed) return this.result(false, "Campo obrigatório");

        const lettersOnly = trimmed.replace(/\s+/g, "");
        if (lettersOnly.length < 5)
            return this.result(false, "Deve conter pelo menos 5 letras");

        if (lettersOnly.length > 50)
            return this.result(false, "Deve conter no máximo 50 letras");

        const words = trimmed.split(/\s+/);
        if (words.length < 2)
            return this.result(false, "Nome completo deve conter sobrenome");

        const nameRegex = /^[A-Za-zÀ-ÿ]+$/;
        for (const word of words) {
            if (!nameRegex.test(word)) {
                return this.result(false, "Apenas letras são permitidas");
            }
        }

        return this.result(true);
    }


    static validateCPF(cpfValue) {
        if (!cpfValue) return this.result(false, "Campo obrigatório");

        const cpf = String(cpfValue).replace(/\D/g, "");
        if (cpf.length !== 11)
            return this.result(false, "CPF deve conter 11 dígitos");

        if (/^(\d)\1{10}$/.test(cpf))
            return this.result(false, "CPF inválido");

        const digits = cpf.split("").map(Number);

        const calcDigit = (slice, factor) => {
            const total = slice.reduce((sum, num, i) => sum + num * (factor - i), 0);
            const rest = total % 11;
            return rest < 2 ? 0 : 11 - rest;
        };

        const d1 = calcDigit(digits.slice(0, 9), 10);
        const d2 = calcDigit(digits.slice(0, 10), 11);

        if (d1 !== digits[9] || d2 !== digits[10])
            return this.result(false, "CPF inválido");

        return this.result(true);
    }

    static validateEmail(email) {
        if (!email) return { valid: false, message: "Campo obrigatório" };

        const trimmed = email.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(trimmed)) {
            return { valid: false, message: "E-mail inválido" };
        }

        return { valid: true, message: "" };
    }


    static validatePhoneNumber(phone) {
        const digits = phone.replace(/\D/g, "");

        if (digits.length < 10) {
            return { valid: false, message: "Telefone incompleto" };
        }

        const ddd = parseInt(digits.slice(0, 2));

        if (ddd < 11 || ddd > 99) {
            return { valid: false, message: "DDD inválido" };
        }

        if (digits.length === 11 && digits[2] !== "9") {
            return { valid: false, message: "Número de celular inválido" };
        }

        return { valid: true, message: "" };
    }




    static validateField(fieldName, value) {
        switch (fieldName) {
            case "name":
                return this.validateName(value);
            case "cpf":
                return this.validateCPF(value);
            case "email":
                return this.validateEmail(value);
            case "phoneNumber":
                return this.validatePhoneNumber(value);
            default:
                return this.result(true);
        }
    }
}
