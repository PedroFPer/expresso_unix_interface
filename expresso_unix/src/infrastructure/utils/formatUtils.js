export class formatUtils{
    static formatshortDate(date) {
        return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    }

    static formatCurrencyBR(value) {
        if (value === null || value === undefined || value === "") return "0,00";

        return Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    static formatField(typeFormat, value){
        switch(typeFormat){
            case "shortDate":
                return this.formatshortDate(value);

            case "currencyBR":
                return this.formatCurrencyBR(value);
        }

    }
}