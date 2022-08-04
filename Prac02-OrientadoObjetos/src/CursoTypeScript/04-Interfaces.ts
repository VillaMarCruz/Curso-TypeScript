interface Direccion{
    calle:string;
    ciudad:string;
    provincia: string;
}
interface Profesor{
    cedula:string;
    nombres:string;
    edad:number;
    profesion:string;
    domicilio:Direccion;
}

const OProf:Profesor={
    cedula:"0702468034",
    nombres: "Luis",
    edad: 44,
    profesion:"Ingeniero Sistemas",
    domicilio: {
        calle: "Filomeno Pesantez",
        ciudad: "Santa Rosa",
        provincia: "El Oro"
    }
}

console.log(OProf);