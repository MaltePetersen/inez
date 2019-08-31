export interface ProduktDTO {
    id: number;
    name: string;
    unit: string;
    defaultAmount: number;
    example: string;
}
export class ProduktDTO {
    id: number;
    name: string;
    unit: string;
    defaultAmount: number;
    example: string;
    constructor(id: number, name: string, unit: string, defaultAmount: number, example: string) {
        this.id = id; 
        this.name = name; 
        this.defaultAmount = defaultAmount; 
        this.example = example; 
        this.unit = unit; 
        
    }
}

export interface PurchaseItemDTOList {
    produktDTO: ProduktDTO;
    amount: number;
}
export class PurchaseItemDTOList {
    produktDTO: ProduktDTO;
    amount: number;
    constructor(productDto: ProduktDTO, amount: number) {
        this.produktDTO = productDto;
        this.amount = amount;
    }
}

export interface PurchaseListDTO {
    email: string;
    purchaseItemDTOList: PurchaseItemDTOList[];
}
export class PurchaseListDTO {
    email: string;
    purchaseItemDTOList: PurchaseItemDTOList[];
    constructor(email: string, purchaseItemDTOList){
        this.email = email; 
        this.purchaseItemDTOList = purchaseItemDTOList;
    }
}

