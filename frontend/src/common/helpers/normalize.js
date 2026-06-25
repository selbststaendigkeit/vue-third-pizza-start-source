import doughSizes from '@/common/data/doughSizes.js';
import pizzaSizes from '@/common/data/sizes.js';
import sauces from '@/common/data/sauces.js';
import fillings from '@/common/data/ingredients.js';

export const normalizeDough = (rawDough) => {
    return rawDough.map((dough) => {
        return {
            ...dough,
            doughSize: doughSizes[dough.id]
        }
    })
};

export const normalizeDiameters = (rawDiameters) => {
    return rawDiameters.map((diameter) => {
        return {
            ...diameter,
            alias: pizzaSizes[diameter.id]
        }
    })
};

export const normalizeSauces = (rawSauces) => {
    return rawSauces.map((sauce) => {
        return {
            ...sauce,
            alias: sauces[sauce.id]
        }
    })
};

export const normalizeFillings = (rawFillings) => {
    return rawFillings.map((filling) => {
        return {
            ...filling,
            alias: fillings[filling.id]
        }
    })
};
