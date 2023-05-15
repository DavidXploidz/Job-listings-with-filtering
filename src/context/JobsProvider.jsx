import { createContext } from "react";
import { useState, useEffect } from 'react'
const JobsContext = createContext();

const JobsProvider = ({children}) => {

    const [jobs, setJobs] = useState([]);
    const [jobsDefault, setJobsDefault] = useState([]);
    const [filters, setFilters] = useState({
        frontend: false,
        backend: false,
        fullstack: false,
        junior: false,
        senior: false,
        midweight: false
    });

    useEffect(() => {
      consultarApi();
    },[]);

    useEffect(() => {
        const filteredVacancies = jobsDefault.filter(vacancy => {
          if (filters.frontend && vacancy.role !== 'Frontend') {
            return false;
          }
          if (filters.backend && vacancy.role !== 'Backend') {
            return false;
          }
          if (filters.fullstack && vacancy.role !== 'Fullstack') {
            return false;
          }
          if (filters.junior && vacancy.level !== 'Junior') {
            return false;
          }
          if (filters.senior && vacancy.level !== 'Senior') {
            return false;
          }
          if (filters.midweight && vacancy.level !== 'Midweight') {
            return false;
          }
          return true;
        });
        setJobs(filteredVacancies);
    }, [filters, jobsDefault]);
    

    //Consulta la data o api y establece los registros en un state de jobs y jobsDefault
    const consultarApi = async () => {
        const url = 'http://localhost:5173/data.json';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setJobs(resultado);
        setJobsDefault(resultado);
    }

    //Actualiza el estado del componente cada vez que se produce un cambio en un elemento input
    //manteniendo una lista de los elementos seleccionados y sus estados correspondientes.
    const handleFilterChange = (e) => {
        const { id, checked } = e.target;
        setFilters({ ...filters, [id]: checked });
    };

    //Limpia o restablece los valores a un inicio
    const handleResetFilter = () => {
        setJobs(jobsDefault);
        setFilters({
            frontend: false,
            backend: false,
            fullstack: false,
            junior: false,
            senior: false,
            midweight: false
        })
    }


    return (
        <JobsContext.Provider
            value={{
                jobs,
                handleResetFilter,
                handleFilterChange,
                filters
            }}
        >{children}
        </JobsContext.Provider>
      )
}

export{
    JobsProvider
}

export default JobsContext;