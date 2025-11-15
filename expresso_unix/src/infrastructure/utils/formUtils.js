export class formUtils {
    static handleChange(e, setFormData) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }



}