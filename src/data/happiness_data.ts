/* eslint-disable prettier/prettier */
export interface HappinessData {
    country: string;
    happiness: number;
    continent: string;
}

export const happinessData: HappinessData[] = [
    // Africa
    {
        country: 'Zimbabwe',
        happiness: 2.995,
        continent: 'Africa',
    },
    {
        country: 'Rwanda',
        happiness: 3.268,
        continent: 'Africa',
    },
    {
        country: 'Botswana',
        happiness: 3.471,
        continent: 'Africa',
    },

    // Asia
    {
        country: 'Afghanistan',
        happiness: 2.404,
        continent: 'Asia',
    },
    {
        country: 'Lebanon',
        happiness: 2.955,
        continent: 'Asia',
    },
    {
        country: 'India',
        happiness: 3.777,
        continent: 'Asia',
    },

    // Europe
    {
        country: 'Georgia',
        happiness: 4.973,
        continent: 'Europe',
    },
    {
        country: 'Ukraine',
        happiness: 5.084,
        continent: 'Europe',
    },
    {
        country: 'Azerbaijan',
        happiness: 5.173,
        continent: 'Europe',
    },

    // South America
    {
        country: 'Venezuela',
        happiness: 4.925,
        continent: 'South America',
    },
    {
        country: 'Peru',
        happiness: 5.559,
        continent: 'South America',
    },
    {
        country: 'Paraguay',
        happiness: 5.578,
        continent: 'South America',
    },

    // North America
    {
        country: 'Dominican Republic',
        happiness: 5.737,
        continent: 'North America',
    },
    {
        country: 'Honduras',
        happiness: 6.022,
        continent: 'North America',
    },
    {
        country: 'Costa Rica',
        happiness: 6.582,
        continent: 'North America',
    },

    // Oceania (if needed, considering Australia was in the list)
    {
        country: 'Australia',
        happiness: 7.184,
        continent: 'Oceania',
    },
    {
        country: 'New Zealand',
        happiness: 7.277,
        continent: 'Oceania',
    },
    {
        country: 'Fiji',
        happiness: 6.196,
        continent: 'Oceania',
    },
];
