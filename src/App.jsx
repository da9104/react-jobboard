import { useState, useEffect, useContext } from 'react'
import './App.css'
import JobsData from './data/data.json'
import Header from './components/Header'
import JobListing from './components/JobListing'
import FilterList from './components/FilterList'
import {COLOR_SCHEME, MEDIA_QUERY, BOX_SHADOW} from './theme'
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    COLOR_SCHEME,
    MEDIA_QUERY,
    BOX_SHADOW
  };

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
      (filters.languages === undefined ? true : job.languages === filters.languages.every(lang => job.languages.indexOf(lang) !== -1)) &&
      (filters.tools === undefined ? true : job.tools === filters.tools.every(tool => job.tools.indexOf(tool) !== -1)) ))
  }, [filters])

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <FilterList filters={filters} setFilters={setFilters} />
      <JobListing jobs={jobs} filters={filters} setFilters={setFilters} />
    </ThemeProvider>
  )
}

export default App
