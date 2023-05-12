import '../styles/Header.css'
import useJobs from '../hooks/useJobs'

export default function Header() {

    const { hola } = useJobs();

  return (
    <header className='header'>

    </header>
  )
}
