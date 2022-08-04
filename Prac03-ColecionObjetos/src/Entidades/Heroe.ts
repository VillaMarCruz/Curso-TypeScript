class Heroes{
    public codigo:number;
    public nombre:string;
    public edad:number;
    public ciudad:string

    constructor(codigo:number, nombre:string, edad:number, ciudad:string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

export{
    Heroes
}