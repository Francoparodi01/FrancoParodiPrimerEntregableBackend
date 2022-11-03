class usuarioEntregable{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
        }
        getFullName(nombre){
            console.log(`el nombre del usuario es ${this.nombre} ${this.apellido}`);
        }
        addMascotas(mascotas){
            this.mascotas.push(mascotas)
            console.log(`La cantidad de mascotas del usuario es ${this.mascotas}`)
        }
        addBook(libros){
            this.libros.push(libros)
            console.log()
        }
        
    }

let primerUsuario = new usuarioEntregable("Franco", "Parodi", {libro:"El jardin de los senderos que se bifurcan", autor:"Jorge Luis Borges"}, "");
console.log(primerUsuario.getFullName())
console.log(primerUsuario.addMascotas("Hachi"))

