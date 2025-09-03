export interface Inventory {
    name: string;
    quantity: number;
    pricePerUnit: number;
    wholesalePrice: number;
    saleTaxPerUnit?: number;
}

export const getValueOfStore = (item: Inventory[]): number => {
    const totalValue = item.reduce((acc, item) => {
        return acc + (item.quantity * item.pricePerUnit);
    }, 0);
    return totalValue;
}

export interface InventoryWithProfiPotential extends Inventory {
    potentialProfit: number;
}

export const getInventoryWithProfitPotential = (item: Inventory[]): InventoryWithProfiPotential[] => {
    const itemWithProfitPotential: InventoryWithProfiPotential[] = item.map((item: Inventory) => {




        const result: InventoryWithProfiPotential = {
            ...item,
            potentialProfit: item.pricePerUnit - item.wholesalePrice
        };
        return result;
    });
    return itemWithProfitPotential;


}
