import { Unidade } from "./unidade";

export interface Servidor {

    matricula?:string;
    login?:string;
    nome?:string;
    email?:string;
    lotacao?:Unidade;
    isAtivo?:boolean;
    sexo?:string;
}
