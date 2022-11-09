let is_ok = true

export const customFetch = (task, time) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(is_ok) {
                resolve(task)
            }else {
                reject('Solicitud rechazada.')
            }
        }, time)
    })
}