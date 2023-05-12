import { createContext } from "react";
import { useState, useEffect } from 'react'
const JobsContext = createContext();

const JobsProvider = ({children}) => {

    useEffect(() => {
      consultarApi();
    },[])
    
    const consultarApi = async () => {
        const url = 'http://localhost:5173/data.json';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setJobs(resultado)
    }

    const [jobs, setJobs] = useState([]);

    return (
        <JobsContext.Provider
                value={{
                    jobs
                }}
        >{children}
        </JobsContext.Provider>
      )
}

export{
    JobsProvider
}

export default JobsContext;