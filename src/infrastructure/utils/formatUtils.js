export class formatUtils {

    static toShortDate(date) {
        if (!date) return "";
        return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    }

    static getDayAndMonth(date) {
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const monthName = date.toLocaleString("pt-BR", { month: "long" });
        const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

        return { day, month: capitalizedMonth };
    }

    static toInputDateFormat(date) {
        if (!date) return "";

        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }



    static toCurrencyBRL(value) {
        if (value === null || value === undefined || value === "") return "0,00";

        return Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    static normalizeForSearch(value) {
        return value
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .toLowerCase()
            .trim();
    }
}
