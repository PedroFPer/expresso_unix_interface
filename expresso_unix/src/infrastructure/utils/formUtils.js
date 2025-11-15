import { tripValidations } from "../validators/tripValidations";

export class formUtils {
    static handleChange(e, setFormData) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    static getTravelSearchErrors(formData) {
        const errors = {};

        const origin = tripValidations.validateText(formData.cityOrigin);
        if (!origin.valid) errors.cityOrigin = origin.message;

        return errors;
    }

}