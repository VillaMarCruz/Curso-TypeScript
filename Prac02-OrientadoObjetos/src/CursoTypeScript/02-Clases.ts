class Heroe {
    public codigo: number;
    public nombres: string;
    public edad: number;

    constructor(codigo: number, nombres: string, edad: number) {
        this.codigo = codigo;
        this.nombres = nombres;
        this.edad = edad;
    }
}

const Spiderman = new Heroe(1, "Peter Parker", 22);
console.log(Spiderman);

class Villano {
    
    constructor(
        public codigo?: number,
        public nombres?: string,
        public edad?: number
    ) {}
}

const DuendeVerde = new Villano(2, "Norman Osbor", 40);
console.log(DuendeVerde);
