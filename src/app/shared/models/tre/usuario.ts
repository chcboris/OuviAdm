import { PerfilAcesso } from "./perfilAcesso";
import { Servidor } from "./servidor";

export class Usuario {
  login?: string;
  senha?: string;
  token?: string;
  servidor?: Servidor;
  perfis: PerfilAcesso[] = [];
}
