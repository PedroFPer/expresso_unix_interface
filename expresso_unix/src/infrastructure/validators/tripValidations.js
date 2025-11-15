export class tripValidations {
    static validateText(text, min = 3, max = 50) {
        const trimmed = text.trim();

        if (!text || text.trim().length === 0) {
            return { valid: false, message: "*Campo deve estar preenchido." };
        }

        if (trimmed.length < min) {
            return { valid: false, message: `*O Campo deve ter pelo menos ${min} caracteres.` };
        }

        if (trimmed.length > max) {
            return { valid: false, message: `*O Campo deve ter no máximo ${max} caracteres.` };
        }

        return { valid: true };
    }


}