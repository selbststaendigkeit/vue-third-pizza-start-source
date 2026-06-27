import doughSizes from '@/common/data/doughSizes.js';
import pizzaSizes from '@/common/data/sizes.js';
import sauces from '@/common/data/sauces.js';
import fillings from '@/common/data/ingredients.js';

export const getConstructorDoughName = (doughItem) => {
    switch (doughItem.doughSize) {
        case 'light':
            doughItem.constructorName = 'small';
            break;
        case 'large':
            doughItem.constructorName = 'big';
            break;
    }
};

export const normalizeDough = (rawDough) => {
    return rawDough.map((dough) => {
        const normalizedDough = {
            ...dough,
            doughSize: doughSizes[dough.id]
        };

        getConstructorDoughName(normalizedDough);

        return normalizedDough;
    });
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

export const normalizeConstructorFillings = (initialFillings) => {
    const chosenFillingsList = [];

    for (let [key, value] of Object.entries(initialFillings)) {
        if (value.count) {
            const isDouble = value.count === 2;
            const isTriple = value.count === 3;

            chosenFillingsList.push({
                name: key,
                isDouble: isDouble,
                isTriple: isTriple
            });
        }
    }

    return chosenFillingsList;
};
