import '../styles/JobsCard.css'

export default function JobsCard({job}) {

const {
    id,
    company,
    logo,
    position,
    postedAt,
    contract,
    location
} = job;

  return (
    <div className='jobsCard'>
        <picture>
            <img src={`${logo}`} alt={`Imagen de ${company}`} />
        </picture>
        <div>
            <p className='jobsCard__company'>{company}</p>
            <h3 className='jobsCard__position'>{position}</h3>
        </div>
        <div>
            Categorias
        </div>
    </div>
  )
}
