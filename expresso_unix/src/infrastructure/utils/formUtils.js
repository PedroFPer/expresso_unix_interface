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

        const originError = tripValidations.validateText(formData.cityOrigin);
        if (!originError.valid) errors.cityOrigin = originError.message;

        const destinationError = tripValidations.validateText(formData.cityDestination);
        if (!destinationError.valid) errors.cityDestination = destinationError.message;

        const departureDateError = tripValidations.validateDate(formData.departureDate);
        if (!departureDateError.valid) errors.departureDate = departureDateError.message;

        const returnDateError = tripValidations.validateDate(formData.returnDate);
        if (!returnDateError.valid) errors.cityDestination = returnDateError.message;

        return errors;
    }

}