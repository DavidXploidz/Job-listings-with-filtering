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
        role,
        featured,
        newJob
    } = job;

    let skills = languages.concat(tools);
    skills.unshift(level);
    skills.unshift(role);

    const active = featured ? 'jobsCard--featured' : '';

  return (
    <div className={`jobsCard ${active}`}>
        <picture className='jobsCard__picture'>
            <img src={`${logo}`} alt={`Imagen de ${company}`} />
        </picture>
        <div>
            <div className='jobsCard__status'>
                <p className='jobsCard__company'>{company}</p>
                {newJob ? (
                    <p className='jobsCard__pill'>New!</p>
                ): null}
                {featured ? (
                    <p className='jobsCard__pill jobsCard__pill--dark'>Featured</p>
                ): null}
            </div>
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
