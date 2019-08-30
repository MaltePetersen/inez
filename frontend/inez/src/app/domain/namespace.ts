export interface ProduktDTO {
    id: number;
    oberKat: string;
    einheit: string;
    stdMenge: number;
    beispielProd: string;
}
export class ProduktDTO {
    id: number;
    oberKat: string;
    einheit: string;
    stdMenge: number;
    beispielProd: string;
    constructor(id: number, oberkat: string, einheit: string, stdMenge: number, beispielProd: string) {

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

