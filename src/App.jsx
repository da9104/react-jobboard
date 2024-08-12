import { useState, useEffect } from 'react'
import './App.css'
import JobsData from './data/data.json'
import Header from './components/Header'
import JobListing from './components/JobListing'
import FilterList from './components/FilterList'

function App() {
  const [ jobs, setJobs ] = useState([])
  const [ filters, setFilters ] = useState({})

  // use hook to load the jobs when the component mounts
  useEffect(() => {
    setJobs(JobsData)
  }, [])

  useEffect(() => { 
     // use hook to update the available jobs based on the filters
    setJobs(JobsData.filter(job => 
      (filters.role === undefined ? true : job.role === filters.role) &&
      (filters.level === undefined ? true : job.level === filters.level) &&
      (filters.languages === undefined ? true : job.language === filters.languages.every(lang => job.languages.indexOf(lang) !== -1)) &&
      (filters.tools === undefined ? true : job.tools === filters.tools.every(tool => job.tools.indexOf(tool) !== -1)) ))
  }, [filters])

  console.log(jobs)

  return (
    <div>
      <Header />
      <FilterList filters={filters} setFilters={setFilters} />
      <JobListing jobs={jobs} filters={filters} setFilters={setFilters} />
    </div>
  )
}

export default App
