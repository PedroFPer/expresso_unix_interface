export class timeUtils {
    static formatDayMonth(date) {
        return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    }
}