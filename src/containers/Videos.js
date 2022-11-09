import { Video } from "../components/Video";
import { data } from '../utilities/data'
import { customFetch } from '../utilities/customFetch'
import { useEffect, useState } from "react";

export const Videos = () => {

    const [datos, setDatos] = useState([]) // representa la lista de videos, traida desde una supuesta BD

    const deleteItem = id => {
        let nuevosDatos = datos.filter(item => item.id != id)
        alert('esta seguro que quiere eliminar el video?')
        setDatos(nuevosDatos)
    }

    useEffect(() => {
        customFetch(data, 2000)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    }, [])


    return (
        <>
          {
            datos.map(item => (
                <Video
                key={item.id} 
                thumbnail={item.thumbnail}
                title={item.title} 
                dateAdded={item.dateAdded} 
                description={item.description} 
                deleteVideo={() => deleteItem(item.id)} />
            ))
          }
        </>
    )
}