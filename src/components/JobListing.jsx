import styled from 'styled-components'
import JobPost from './JobPost.jsx'

export const JobListingContainer = styled.div`
    height: 100vh
    padding: 3em 1em;
    background: ${props => props.theme.COLOR_SCHEME.SECONDARY};
    @media (min-width: ${props => props.theme.MEDIA_QUERY.MIN_WIDTH}) {
        padding: 3em;
    }
`

export default function JobListing({jobs, filters, setFilters }) {
    return (
        <JobListingContainer>
           {jobs.map((job) => <JobPost key={job.id} job={job} filters={filters} setFilters={setFilters} /> )} 
        </JobListingContainer>
    )
}
