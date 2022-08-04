import { Heroes } from "../Entidades/Heroe";

let listaHeroes: Heroes[] = [
    {
        codigo: 1,
        nombre: 'Batman',
        edad: 27,
        ciudad: 'Gotica'
    },
    {
        codigo: 2,
        nombre: 'Ironman',
        edad: 40,
        ciudad: 'Los Angeles'
    },
    {
        codigo: 3,
        nombre: 'DeadPool',
        edad: 27,
        ciudad: 'New York'
    }
];

const heroe4 = new Heroes(4, "Superman", 30, "Metropolis");
listaHeroes.push(heroe4);

function insertHeroe(heroe: Heroes) {
    listaHeroes.push(heroe);
}

function updateHeroe(id, updatedHeroe: Heroes) {
    let identificador = Number(id);
    let heroe = listaHeroes.find((heroe) => heroe.codigo === identificador);

    heroe.codigo = updatedHeroe.codigo;
    heroe.nombre = updatedHeroe.nombre;
    heroe.edad = updatedHeroe.edad;
    heroe.ciudad = updatedHeroe.ciudad;
}

function deleteHeroe(id) {
    let identificador = Number(id);
    let posicion = listaHeroes.findIndex((heroe) => heroe.codigo === identificador);
    listaHeroes.splice(posicion, 1);
}

export {
    listaHeroes,
    insertHeroe,
    updateHeroe,
    deleteHeroe
}