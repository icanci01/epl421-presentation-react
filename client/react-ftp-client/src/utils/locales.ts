export interface Locale {
    name: string;
    country?: string;
}

export const supportedLocales: { [key: string]: Locale } = {
    en: {
        name: 'English',
        country: 'US',
    },
}