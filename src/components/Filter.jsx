import useJobs from '../hooks/useJobs'
import '../styles/Filter.css'


export default function Filter() {

    const {handleFilterChange, handleResetFilter, filters } = useJobs();

  return (
    <div className='contenedor filter'>
        <ul className='filter__ul'>
            <li className='filter__option'>
                <label htmlFor="frontend">Frontend</label>
                <input type="checkbox" id="frontend" checked={filters.frontend} onChange={handleFilterChange} />
            </li>
            <li className='filter__option'>
                <label htmlFor="backend">Backend</label>
                <input type="checkbox" id="backend" checked={filters.backend} onChange={handleFilterChange} />
            </li>
            <li className='filter__option'>
                <label htmlFor="fullstack">Fullstack</label>
                <input type="checkbox" id="fullstack" checked={filters.fullstack} onChange={handleFilterChange} />
            </li>
            <li className='filter__option'>
                <label htmlFor="junior">Junior</label>
                <input type="checkbox" id="junior" checked={filters.junior} onChange={handleFilterChange} />
            </li>
            <li className='filter__option'>
                <label htmlFor="senior">Senior</label>
                <input type="checkbox" id="senior" checked={filters.senior} onChange={handleFilterChange} />
            </li>
            <li className='filter__option'>
                <label htmlFor="midweight">Midweight</label>
                <input type="checkbox" id="midweight" checked={filters.midweight} onChange={handleFilterChange} />
            </li>
        </ul>

        <hr className='filter__hr' />
    
        <button className='filter__clear' onClick={() => {handleResetFilter()}}>Clear</button>
        
    </div>
  )
}
