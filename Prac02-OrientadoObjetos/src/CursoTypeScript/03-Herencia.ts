class Persona {
    public idCodigo: number;
    public nombres: string;
    public apellidos: string;
    public sexo: string;
    public edad: number;
    constructor(idCodigo: number, nombres: string, apellidos: string, sexo: string, edad: number) {
        this.idCodigo = idCodigo;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.edad = edad;
    }
}

class Fijo extends Persona{
    public sueldo: number;
    public comisiones:number;
    constructor(idCodigo: number, nombres: string, apellidos: string, sexo: string, edad: number, sueldo:number, comisiones:number){
        super(idCodigo, nombres, apellidos, sexo, edad);
        this.sueldo = sueldo;
        this.comisiones = comisiones;
    };
    public calcularSueldo(){
        let su:number;
        su = this.sueldo + this.comisiones;
        console.log("Sueldo a cobrar", su);
    }
}

class Consultor extends Persona{
    public horas:number;
    public costo:number;
    constructor(idCodigo: number, nombres: string, apellidos: string, sexo: string, edad: number, horas:number, costo:number){
        super(idCodigo, nombres, apellidos, sexo, edad);
        this.horas = horas;
        this.costo = costo;
    };

    public calcularSueldo(){
        let su:number;
        su = this.horas * this.costo;
        console.log("Sueldo a cobrar: ", su);
    }
}

const op = new Persona(1,"Marlon", "Villamar", "M", 22);
console.log(op);
const oef = new Fijo(1,"Marlon", "Villamar", "M", 22,400,100);
console.log(oef);
oef.calcularSueldo();
const oec = new Consultor(1,"Marlon", "Villamar", "M", 22,10,20);
console.log(oec);
oec.calcularSueldo();