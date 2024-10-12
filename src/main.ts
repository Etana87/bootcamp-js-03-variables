import "./style.css";

// ESTILOS
const estiloNombre = "font-weight: bold; font-size: 16px; color: green;"

// GÉNEROS
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";


// OBJETO Y VARIABLES
interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const grupos: Grupo[] = [
    { nombre: 'The Beatles', año: 1960, activo: true, genero: popRock },
    { nombre: 'Queen', año: 1970, activo: false, genero: rock },
    { nombre: 'AC DC', año: 1973, activo: true, genero: hardRock },
    { nombre: 'Ludwig van Beethoven', año: 1770, activo: false, genero: clasica },
    { nombre: 'The Rolling Stones', año: 1962, activo: true, genero: rock },
];

// MOSTRAR GRUPOS
grupos.forEach(grupo => {
    console.log(`%c${grupo.nombre}`, estiloNombre, 
        `Año de fundación: ${grupo.año}, 
        Activo: ${grupo.activo}, 
        Género: ${grupo.genero}`);
});
