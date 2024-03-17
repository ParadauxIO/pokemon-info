export function getRandomArrayIndex<T>(arr: T[]): number {
    if (arr && arr.length) {
        return Math.floor(Math.random() * arr.length);
    }

    return 0;
}

export function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}