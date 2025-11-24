export class formatUtils {
    static formatshortDate(date) {
        if (!date) return "";

        return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    }

    static formatDayMonthDate(date) {
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = date.toLocaleString("pt-BR", { month: "long" }); 

        const formatMonth = month.charAt(0).toUpperCase() + month.slice(1);

        return {
            day: day,
            month: formatMonth
        };
    }

    static formatCurrencyBR(value) {
        if (value === null || value === undefined || value === "") return "0,00";

        return Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    static formatField(typeFormat, value) {
        switch (typeFormat) {
            case "shortDate":
                return this.formatshortDate(value);

            case "dayMonthDate":
                return this.formatDayMonthDate(value);

            case "currencyBR":
                return this.formatCurrencyBR(value);
        }

    }
}