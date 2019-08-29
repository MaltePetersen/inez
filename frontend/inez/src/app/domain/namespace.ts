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

export interface EinkaufsItemDTOList {
    produktDTO: ProduktDTO;
    amount: number;
}
export class EinkaufsItemDTOList {
    produktDTO: ProduktDTO;
    amount: number;
    constructor(productDto: ProduktDTO, amount: number) {
        this.produktDTO = productDto;
        this.amount = amount;
    }
}

export interface EinkaufsList {
    email: string;
    einkaufsItemDTOList: EinkaufsItemDTOList[];
}
export class EinkaufsList {
    email: string;
    einkaufsItemDTOList: EinkaufsItemDTOList[];
    constructor(email: string, einkaufsItemDTOList){
        this.email = email; 
        this.einkaufsItemDTOList = einkaufsItemDTOList;
    }
}

