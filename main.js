// Objetos literales y prototipos en JavaScript

/*
https://platzi.com/comentario/2667411/
*/

// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//         "Curso definitivo de HTML y CSS",
//         "Curso Practico de HTML y CSS",
//         "Curso de Analisis de amenazas",
//     ],
// };

// // Natalia quiere aprobar otro curso
// natalia.cursoAprobados.push("Curso de Responsive Designe");
// console.log(natalia.cursoAprobados);

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanillo = new Student(
    "Juanillo Perez",
    '22',
    [
        "Introduccion a la Ingenieria de Sistemas",
        "Introduccion a Base de datos",
        "Fundamentos del Pentesting"
    ],
);

// Prototipos con la sintaxis de clases
// class Student2 {
//     constructor(name, age, cursosAprobados) {
//         this.name = name;
//         this.age = age;
//         this.cursosAprobados = cursosAprobados;
//     }

class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
        twitter = "",
        instagram = "",
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.instagram = instagram;
        this.twitter = twitter;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const migueliu = new Student2({
    name: "Miguel", age: 28, email: "miguelito@gmail.com"

}
);