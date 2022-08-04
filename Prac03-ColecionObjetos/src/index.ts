import {listaHeroes, insertHeroe, updateHeroe, deleteHeroe} from './Controlador/TLista';
import { Heroes } from './Entidades/Heroe';

const formRegistro = <HTMLFormElement>document.querySelector('.form');
const codigoInput:any = document.getElementById('codigo') as HTMLInputElement;
const nombreInput:any = document.getElementById('nombre') as HTMLInputElement;
const edadInput:any = document.getElementById('edad') as HTMLInputElement;
const ciudadInput:any = document.getElementById('ciudad') as HTMLInputElement;

const tabla_heroes = document.querySelector('tbody');

var resultados = '';
var opcion = '';

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    resultados = '';
    if(opcion === 'editar'){
        let updatedHeroe = new Heroes(Number(codigoInput.value), nombreInput.value, edadInput.value, ciudadInput.value);
        updateHeroe(codigoInput.value, updatedHeroe);
        mostrarHeroes(listaHeroes);
        opcion = 'insertar';
        codigoInput.disabled = false;
    }else{
        let newHeroe = new Heroes(Number(codigoInput.value), nombreInput.value, edadInput.value, ciudadInput.value);
        insertHeroe(newHeroe);
        mostrarHeroes(listaHeroes);
    }
});

const obtenerHeroes = () => {
    mostrarHeroes(listaHeroes);
} 

const mostrarHeroes = (heroes) => {
    heroes.forEach(heroe => {
        resultados += `
        <tr class="text-center">
            <td>${heroe.codigo}</td>
            <td>${heroe.nombre}</td>
            <td>${heroe.edad}</td>
            <td>${heroe.ciudad}</td>
            <td>
                <button class="buttons btn-modificar" value="${heroe.codigo}">Modificar</button>
            </td>
            <td>
                <button class="buttons btn-eliminar" value="${heroe.codigo}">Eliminar</button>
            </td>
        </tr>
    `;
    });
    tabla_heroes.innerHTML = resultados;
    formRegistro.reset();
};

obtenerHeroes();

const onclick = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

onclick(document, 'click', '.btn-modificar', e => {
    let codigo:number = e.target.getAttribute('value');
    let buscarHereo = listaHeroes.find((hereo)=> hereo.codigo == codigo);
    opcion = 'editar'
    codigoInput.disabled = true;
    codigoInput.value = buscarHereo.codigo;
    nombreInput.value = buscarHereo.nombre;
    edadInput.value = buscarHereo.edad;
    ciudadInput.value = buscarHereo.ciudad;
});

onclick(document, 'click', '.btn-eliminar', e => {
    resultados = '';
    let codigo = e.target.getAttribute('value');
    console.log(codigo);
    deleteHeroe(codigo);
    mostrarHeroes(listaHeroes);
});




/*
    ===== Código de TypeScript =====
*/

