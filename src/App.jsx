import Filter from "./components/Filter";
import Header from "./components/Header"
import JobsCard from "./components/JobsCard";
import useJobs from "./hooks/useJobs"

function App() {
 
  const { jobs } = useJobs();

  return (
    <>
      <Header />
      <Filter />
      <main className="contenedor my-5">
        {jobs ? jobs.map(job => (
          <JobsCard key={job.id} job={job} />
        )) : (
          <h2>No jobs yet!</h2>
        )}
      </main>
    </>
  )
}

export default App
