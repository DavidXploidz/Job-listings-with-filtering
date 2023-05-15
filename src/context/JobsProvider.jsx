import { createContext } from "react";
import { useState, useEffect } from 'react'
const JobsContext = createContext();

const JobsProvider = ({children}) => {

    const [jobs, setJobs] = useState([]);
    const [jobsDefault, setJobsDefault] = useState([]);
    const [copy, setCopy] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
      consultarApi();
    },[]);

    // console.log(copy);
    
    const consultarApi = async () => {
        const url = 'http://localhost:5173/data.json';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setJobs(resultado);
        setJobsDefault(resultado);
    }

    const handleClickRole = (role) => {
        const filtrados = jobsDefault.filter(job => job.role === role);
        setCopy([...copy, ...filtrados]);
        setJobs([...copy, ...filtrados]);
    }

    const handleClickLevel = (level) => {
        const filtrados = jobsDefault.filter(job => job.level === level);
        setCopy([...copy, ...filtrados]);
        setJobs([...copy, ...filtrados]);
    }

    const handleResetFilter = () => {
        setJobs(jobsDefault);
    }


    return (
        <JobsContext.Provider
                value={{
                    jobs,
                    handleClickRole,
                    handleResetFilter,
                    handleClickLevel,
                }}
        >{children}
        </JobsContext.Provider>
      )
}

export{
    JobsProvider
}

export default JobsContext;