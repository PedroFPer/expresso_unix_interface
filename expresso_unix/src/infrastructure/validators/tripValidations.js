export class tripValidations {
    static isEmpty(value) {
        return !value || value.trim().length === 0;
    }

    static validateCity(city, min = 2, max = 50) {
        const trimmed = city.trim();

        if (trimmed.length < min) {
            return { valid: false, message: `City must have at least ${min} characters.` };
        }

        if (trimmed.length > max) {
            return { valid: false, message: `City must have at most ${max} characters.` };
        }

        return { valid: true };
    }

    static validateDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();

        if (isNaN(date.getTime())) {
            return { valid: false, message: "Invalid date." };
        }

        date.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        if (date < today) {
            return { valid: false, message: "Date cannot be in the past." };
        }

        return { valid: true };
    }

    


}