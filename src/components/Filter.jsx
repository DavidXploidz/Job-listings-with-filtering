import useJobs from '../hooks/useJobs'
import '../styles/Filter.css'
import { useState } from 'react';

export default function Filter() {

    const { jobs, handleClickRole, handleResetFilter, handleClickLevel } = useJobs();
    const [isChecked, setIsChecked] = useState(false);
    
  return (
    <div className='contenedor filter'>
        <ul className='filter__ul'>
            <li className='filter__option'>
                <label htmlFor="frontend">Frontend</label>
                <input type="checkbox" id="frontend" onClick={() => {handleClickRole('Frontend')}} />
            </li>
            <li className='filter__option'>
                <label htmlFor="backend">Backend</label>
                <input type="checkbox" id="backend" onClick={() => {handleClickRole('Backend')}} />
            </li>
            <li className='filter__option'>
                <label htmlFor="fullstack">Fullstack</label>
                <input type="checkbox" id="fullstack" onClick={() => {handleClickRole('Fullstack')}} />
            </li>
            <li className='filter__option'>
                <label htmlFor="junior">Junior</label>
                <input type="checkbox" id="junior" onClick={() => {handleClickLevel('Junior')}} />
            </li>
            <li className='filter__option'>
                <label htmlFor="senior">Senior</label>
                <input type="checkbox" id="senior" onClick={() => {handleClickLevel('Senior')}} />
            </li>
        </ul>
    
        <button className='filter__clear' onClick={() => {handleResetFilter()}}>Clear</button>
        
    </div>
  )
}
