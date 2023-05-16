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
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">David Adame Soto</a>.
      </div>
    </>
  )
}

export default App
