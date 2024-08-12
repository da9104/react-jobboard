import styled from 'styled-components'
import { COLOR_SCHEME, MEDIA_QUERY, BOX_SHADOW } from '../theme'

export const JobPostContainer = styled.div`
    font-size: .8125rem;
    background: ${COLOR_SCHEME.WHITE};
    margin: 0 auto 3em;
    padding: 1em 1.5em;
    max-width: 1110px;
    display: flex;
    flex-direction: column;       
    border-radius: .5em;
    border-left: ${props => props.featured ? `.4em solid ${COLOR_SCHEME.PRIMARY}`  : 'none'};
    
    box-shadow: ${BOX_SHADOW.PRIMARY_COLOR};
    @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {
        flex-direction: row;
        padding: 2em;
    }
`

export const JobPostImage = styled.img.attrs(props => ({
    src: props.imagePath, alt: props.alt
  }))`
    width: 48px;    
    height: auto;
    margin: -2.8em 0 .5em .5em;

    @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {
        width: 88px;
        height: 88px;
        margin: 0;
        padding: .5em .5em 0;
        margin: auto 1em auto 0;
    }
`

export const JobPostCenterWrapper = styled.div`
    min-width: 250px;
    margin: auto 0;
    @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {        
        padding-top: .5em;
    }
`

export const JobPostCompanyWrapper = styled.div`
    display: flex;
    margin-bottom: 1em;
`

export const JobPostCompany = styled.div`    
    color: ${COLOR_SCHEME.PRIMARY};
    font-weight: 700;
    margin-right: 1em;
    padding-top: 6px;    
`
export const JobPostNewPost = styled.div`
    font-size: .6875rem;
    background: ${COLOR_SCHEME.PRIMARY};
    color: ${COLOR_SCHEME.WHITE};
    border-radius: 1em;
    padding: 8px 8px 4px 8px;
    margin-right: 1em;
`
export const JobPostFeatured = styled.div`
    font-size: .6875rem;
    background: ${COLOR_SCHEME.SECONDARY_DARKEST};
    color: ${COLOR_SCHEME.WHITE};
    border-radius: 1em;
    padding: 8px 8px 4px 8px;
`

export const JobPostPosition = styled.div`
    font-size: .9375rem;
    font-weight: 700;
    color: ${COLOR_SCHEME.SECONDARY_DARKEST};
    margin-bottom: 1em;
    &:hover{
        color: ${COLOR_SCHEME.PRIMARY};
        cursor: pointer;
    }
`

export const JobPostDetails = styled.div`
    display: flex;
    margin-bottom: 1.5em;
    @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {
        width: 95%;
        justify-content: space-between;
    }
`
export const JobPostDetail = styled.div`
    color: ${COLOR_SCHEME.SECONDARY_DARKER};
    margin-right: .5em;

`
export const BulletPoint = styled.div`
    color: ${COLOR_SCHEME.SECONDARY_DARKER};
    margin-right: .5em;
`
export const HorizontalRule = styled.div`
    border-bottom: 1px solid ${COLOR_SCHEME.HORIZONTAL_RULE};
    width: 100%;
    margin: 0 auto;
    @media (min-width: ${MEDIA_QUERY.HORIZONTAL_RULE}) {
        border-bottom: none;
    }
`

export const JobPostFilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {
        align-content: center;
        flex-grow: 1; 
        justify-content: flex-end;
    }
`

export const JobPostFilterButton = styled.button`
    font-family: inherit;
    font-weight: 700;
    background: ${COLOR_SCHEME.SECONDARY};
    color: ${COLOR_SCHEME.PRIMARY};
    padding: 0 10px;
    height: 32px;
    border-radius: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 1em 1em 0 0;
    &:hover {
        background: ${COLOR_SCHEME.PRIMARY};
        color: ${COLOR_SCHEME.SECONDARY};
        transition: all 250ms;
    }
`

export default function JobPost ({ job, filters, setFilters }) {
    
    function handleAddFilter(filterValue, filterFieldName){

        const filter = filterValue
        const filterField =  filterFieldName

        if(filterField === 'role' && filters.role !== filter) {
            setFilters({ ...filters, "role": filter })
        } else if(filterField === 'level' && filters.level !== filter) {
            setFilters({ ...filters, "level": filter })
        } else if(filterField === 'languages' && filters.languages === undefined ) {
            setFilters({ ...filters, "languages": [filter] })            
        } else if(filterField === 'languages' && !filters.languages.includes(filter) ) {
            setFilters({ ...filters, ...filters.languages.push(filter) })            
        } else if(filterField === 'tools' && filters.tools === undefined ) {
            setFilters({ ...filters, "tools": [filter] })
        } else if(filterField === 'tools' && !filters.tools.includes(filter)) {
            setFilters({ ...filters, ...filters.tools.push(filter) })
        } 
    }

    
    return (
        <JobPostContainer featured={job.featured}>
            <JobPostImage imagePath={job.logo} alt={job.company} />
            <JobPostCenterWrapper>
                <JobPostCompanyWrapper>
                    <JobPostCompany>{job.company}</JobPostCompany>
                    <JobPostNewPost hidden={job.new ? false : true} >{job.new? "NEW" : null}</JobPostNewPost>
                    <JobPostFeatured hidden={job.featured ? false : true}>{job.featured ? "FEATURED" : null}</JobPostFeatured>
                </JobPostCompanyWrapper>
                <JobPostPosition>{job.position}</JobPostPosition>
                <JobPostDetails>
                    <JobPostDetail>{job.postedAt}</JobPostDetail>
                    <BulletPoint>{'\u2022'}</BulletPoint>
                    <JobPostDetail>{job.contract}</JobPostDetail>
                    <BulletPoint>{'\u2022'}</BulletPoint>
                    <JobPostDetail>{job.location}</JobPostDetail>
                </JobPostDetails>
                <HorizontalRule />
            </JobPostCenterWrapper>
                <JobPostFilterContainer>
                    <JobPostFilterButton key={job.role} onClick={() => handleAddFilter(job.role, "role")}>{job.role}</JobPostFilterButton>
                    <JobPostFilterButton key={job.level} onClick={() => handleAddFilter(job.level, "level")}>{job.level}</JobPostFilterButton>
                    {job.languages.map(language => <JobPostFilterButton key={language} onClick={() => handleAddFilter(language, "languages")}>{language}</JobPostFilterButton>)}
                    {job.tools.map(tool => <JobPostFilterButton key={tool} onClick={() => handleAddFilter(tool, "tools")}>{tool}</JobPostFilterButton>)}
                </JobPostFilterContainer>
                <br></br>
        </JobPostContainer >
    )
}