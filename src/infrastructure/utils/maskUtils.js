export class maskUtils {

    static cpfDigitsOnly(value) {
        return value.replace(/\D/g, "").slice(0, 11);
    }

    static phoneDigitsOnly(value) {
        return value.replace(/\D/g, "").slice(0, 11);
    }

    static limitText(value) {
        if (typeof value !== "string") value = "";
        return value.slice(0, 50);
    }

    static maskPhoneNumber(phone) {
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

    static maskCpf(cpf) {
        if (!cpf) return "";

        return cpf
            .replace(/\D/g, "")
            .slice(0, 11)
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    static dateToBR(dateObj) {
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
    }


}
