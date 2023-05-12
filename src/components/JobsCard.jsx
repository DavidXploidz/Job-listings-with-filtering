import { useState } from 'react';
import '../styles/JobsCard.css'

export default function JobsCard({job}) {

    const {
        company,
        logo,
        position,
        postedAt,
        contract,
        location,
        languages,
        tools,
        level,
        role
    } = job;

    let skills = languages.concat(tools);
    skills.unshift(level);
    skills.unshift(role);

  return (
    <div className='jobsCard'>
        <picture>
            <img src={`${logo}`} alt={`Imagen de ${company}`} />
        </picture>
        <div>
            <p className='jobsCard__company'>{company}</p>
            <h3 className='jobsCard__position'>{position}</h3>
            <ul className='jobsCard__list'>
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
            </ul>
        </div>
        <div className='jobsCard__skills'>
            {skills ? skills.map((skill, index) => (
                <div key={index} className='skill'>
                    {skill}
                </div>
            )): (
                <p>No requirements</p>
            )}
        </div>
    </div>
  )
}
