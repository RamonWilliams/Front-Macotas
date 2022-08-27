import"./MascotaCard.css"

const MascotaCard = ({mascota}) => {
    return (
            <figure className="card">
                      <div className="pet-image">        
                 <img src={mascota.image} alt={mascota.petname} />
                 </div>
                 
                 <h2>Nombre: {mascota.petname}</h2>
                 <h3>Apodo: {mascota.nickname}</h3>
                 <p>Tipo: {mascota.type}</p>
                 <p>Descripción: {mascota.description}</p> 
             
          </figure>
    )
}

export default MascotaCard;