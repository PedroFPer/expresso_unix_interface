export class validationsUtils {

    static validateName(value) {
        const trimmed = typeof value === "string" ? value.trim() : "";
        if (!trimmed) return { valid: false, message: "Campo obrigatório" };

        const lettersOnly = trimmed.replace(/\s+/g, '');
        if (lettersOnly.length < 5) return { valid: false, message: "Deve conter pelo menos 5 caracteres" };
        if (lettersOnly.length > 50) return { valid: false, message: "Deve conter no máximo 50 caracteres" };

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


    static validateSelect(value) {
        if (!value || value === "" || value === "default")
            return { valid: false, message: "Selecione uma opção" };

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

    static validatePassword(value) {
        if (!value) return { valid: false, message: "Campo obrigatório" };

        const password = value.toString();

        if (password.length < 8)
            return { valid: false, message: "A senha deve ter no mínimo 8 caracteres" };

        if (password.length > 20)
            return { valid: false, message: "A senha deve ter no máximo 20 caracteres" };

        return { valid: true, message: "" };
    }

    static validateText(value) {
        const trimmed = typeof value === "string" ? value.trim() : "";
        if (!trimmed) return { valid: false, message: "Campo obrigatório" };

        const lettersOnly = trimmed.replace(/\s+/g, '');
        if (lettersOnly.length < 5) return { valid: false, message: "Deve conter pelo menos 5 caracteres" };
        if (lettersOnly.length > 50) return { valid: false, message: "Deve conter no máximo 50 caracteres" };

        return { valid: true, message: "" };
    }

    static validateDateDeparture(value) {
        if (!value) {
            return { valid: false, message: "Data de saída obrigatória" };
        }

        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            return {
                valid: false,
                message: "A data de saída deve ser hoje ou uma data futura"
            };
        }

        return { valid: true, message: "" };
    }

    static validateDateArrival(value) {
        if (!value) {
            return { valid: false, message: "Data de chegada obrigatória" };
        }

        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            return {
                valid: false,
                message: "A data de chegada deve ser hoje ou uma data futura"
            };
        }

        return { valid: true, message: "" };
    }

    static validateDepartureTime(value) {
        return this.validateTimeNotNow(value, "Horário de saída");
    }

    static validateArrivalTime(value) {
        return this.validateTimeNotNow(value, "Horário de chegada");
    }



    static validateTimeNotNow(value, label) {
        if (!value) {
            return { valid: false, message: "Campo obrigatório" };
        }

        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timeRegex.test(value)) {
            return { valid: false, message: "Horário inválido" };
        }

        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

        if (value === currentTime) {
            return {
                valid: false,
                message: `${label} não pode ser o horário atual`
            };
        }

        return { valid: true, message: "" };
    }

    static validatePrice(value) {
        if (!value || typeof value !== "string") {
            return { valid: false, message: "Preço obrigatório" };
        }


        const priceRegex = /^\d+(\.\d{2})$/;

    

        if (value === "0.00") {
            return {
                valid: false,
                message: "O preço deve ser maior que zero"
            };
        }

        return { valid: true, message: "" };
    }


    static validateSeats(value) {
        if (value === "" || value === null || value === undefined) {
            return { valid: false, message: "Número de assentos obrigatório" };
        }

        const seats = Number(value);

        if (isNaN(seats)) {
            return { valid: false, message: "Número inválido" };
        }

        if (!Number.isInteger(seats)) {
            return { valid: false, message: "Deve ser um número inteiro" };
        }

        if (seats <= 0) {
            return { valid: false, message: "Deve ser maior que zero" };
        }

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

            case "password":
                return this.validatePassword(value);

            case "select":
                return this.validateSelect(value);

            case "text":
                return this.validateText(value);

            case "dateDeparture":
                return this.validateDateDeparture(value);

            case "dateArrival":
                return this.validateDateArrival(value);

            case "departureTime":
                return this.validateDepartureTime(value);

            case "arrivalTime":
                return this.validateArrivalTime(value);

            case "price":
                return this.validatePrice(value);

            case "totalSeats":
                return this.validateSeats(value);



            default:
                return { valid: true, message: "" };
        }
    }
}
