import { PerfilAcesso } from "./perfilAcesso";
import { Servidor } from "./servidor";

export class Analise {
    login?: string;
    senha?: string;
    token?: string;
    servidor?: Servidor;
    perfis: PerfilAcesso[] = [];
    idOcorencia?: number;
}
