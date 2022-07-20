import path from "path";
import internal from "stream";

let createHash = require('hash-generator');

export class Camera {
    private idCamera: any;
    private video: any;
    private localizacion: any;
    
    
    constructor() {
        this.idCamera = createHash(8);
        this.video = new Video(this.idCamera);
        this.localizacion = new Localizacao();
    }

    getId(){
        return this.idCamera;
    }

    getLoc(){
        return this.localizacion.getCordenada();
    }
};

class Localizacao {
    cordenada: any;

    constructor() {
        this.cordenada = createHash(8);
    }

    getCordenada(){
        return this.cordenada;
    }
}

class Video {
    private idCamera: string;
    private idVideo: string;


    constructor(idCamera: any) {
        this.idVideo = path + "../public/video/demonstration.mp4";
        this.idCamera = idCamera;
    }
}

export class InteligenciaAnalisaVideos {
    analisarGravacao(objetoCamPerson: any) {
        return new AlertaControle(objetoCamPerson);
    }
}

export class AlertaControle {
    usuario: any;
    loc: any;

    constructor(objetoCamPerson: any){
        this.usuario = objetoCamPerson;
        this.loc = objetoCamPerson.getLoc();
    }
}

export class Funcionario {
    id: any;
    password: any;
    
    nome: string;
    cpf: string;
    rg: string;
    endereco: any;

    constructor(id: any, password: any){
        this.id = id;
        this.password = password;
    }

    validarCPF(){

    }

    validarRG() {

    }

    getInfo() {

    }

}
