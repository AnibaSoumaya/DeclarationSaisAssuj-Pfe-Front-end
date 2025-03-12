import { Assujetti } from "./assujetti";
import { TypeDeclaration } from "./typedeclaration";



export class Declaration {
    id?: number;
    dateCreation?: Date;
    dateValidation?: Date;
    typeDeclaration?: TypeDeclaration;
    etatDeclaration?: string;
    assujetti?: Assujetti;
    salaireMensuel?: number;
    numeroDeclaration?: number;
    numeroRapportProvisoir?: string;
    datePlanificationDelibere?: Date;
}