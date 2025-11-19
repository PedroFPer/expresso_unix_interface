export class maskUtils {

    static onlyDigitsCpf(value) {
        return value.replace(/\D/g, "").slice(0,11);
    }

    static onlyDigitsPhoneNumber(value) {
        return value.replace(/\D/g, "").slice(0,11);
    }

    static limitText(value) {
        return value.slice(0, 50);
    }

    static formatPhoneNumber(phone) {
        if (!phone) return "";

        let digits = phone.replace(/\D/g, "").slice(0, 11);

        if (digits.length <= 2) {
            return `(${digits}`;
        }

        if (digits.length === 3) {
            return `(${digits.slice(0, 2)}) ${digits[2]}`;
        }

        if (digits.length <= 6) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        }

        if (digits.length > 6 && digits.length <= 9) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        }
        if (digits.length === 11) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        }

        if (digits.length === 10) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
        }

        return digits;
    }

    static formatCPF(cpf) {
        if (!cpf) return "";

        return cpf
            .replace(/\D/g, "")
            .slice(0, 11)
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    static formattersField(fieldName, value) {
        switch (fieldName) {
            case "cpf":
                return this.formatCPF(value)

            case "phoneNumber":
                return this.formatPhoneNumber(value)

            case "text":
                return this.limitText(value)
            default:
                return value;
        }
    }
}