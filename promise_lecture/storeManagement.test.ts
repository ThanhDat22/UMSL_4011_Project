import { Inventory, getValueOfStore, getInventoryWithProfitPotential } from "./storeManagement";

describe('getValueOfStore', () => {
    it('Adds up the value of all items in the store', () => {
        const items: Inventory[] = [
            {
                name: 'iPad Pro',
                quantity: 5,
                pricePerUnit: 1200,
                wholesalePrice: 1000
            },
            {
                name: 'Macbook Pro',
                quantity: 7,
                pricePerUnit: 1700,
                wholesalePrice: 1500
            }
        ];
        const actual = getValueOfStore(items);
        const expected = 17900;
        expect(actual).toEqual(expected);
    });

    it('Adds up the value of all items in the store', () => {
        const items: Inventory[] = [
            {
                name: 'iPad Pro',
                quantity: 8,
                pricePerUnit: 1200,
                wholesalePrice: 1000
            },
            {
                name: 'Macbook Pro',
                quantity: 2,
                pricePerUnit: 1700,
                wholesalePrice: 1500
            }
        ];
        const actual = getValueOfStore(items);
        const expected = 13000;
        expect(actual).toEqual(expected);
    });

});

describe('getInventoryWithProfitPotential', () => {
    it('Generates an item array with Profit Potential', () => {
        const items: Inventory[] = [
            {
                name: 'iPad Pro',
                quantity: 8,
                pricePerUnit: 1200,
                wholesalePrice: 1000
            },
            {
                name: 'Macbook Pro',
                quantity: 2,
                pricePerUnit: 1700,
                wholesalePrice: 1500
            }
        ];

        const actual = getInventoryWithProfitPotential(items);
        expect(actual).toMatchSnapshot();
    });
});
