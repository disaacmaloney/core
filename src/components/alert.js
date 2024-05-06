import Swal from 'sweetalert2'

export function alertError(message){
    Swal.fire({
        icon: 'error',
        title: 'Error al realizar la operacion',
        text: message,
        showConfirmButton: false,
        timer: 1500
    })
}

export function alertSuccess(message){
    Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: message,
        showConfirmButton: false,
        timer: 1500
    })
}
