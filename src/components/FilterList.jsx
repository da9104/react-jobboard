import { v4 as uuidv4 } from 'uuid';
import FilterItem from './FilterItem'
import styled, { keyframes } from 'styled-components'
import { COLOR_SCHEME, BOX_SHADOW } from '../theme'

// for animating the loading of the filter list container
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const FilterListContainer = styled.div`
    width: 80%;
    background: ${COLOR_SCHEME.WHITE};
    margin: -2em auto 1.5em;
    padding: 1em 2em 0;
    display: flex;
    border-radius: .5em;
    box-sizing: border-box;
    box-shadow: ${BOX_SHADOW.PRIMARY_COLOR};
    animation: ${fadeIn} 250ms;    
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FilterListClear = styled.div`
    color: ${COLOR_SCHEME.SECONDARY_DARKER};
    font-size: .8125rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    padding: 2px 0 1em;
    margin: 0 0 0 auto;
    &:hover {
        text-decoration: underline;
        color: ${COLOR_SCHEME.PRIMARY};
    }
`

export default function FilterList({ filters, setFilters }) {

    function handleFilterListClear() {
        setFilters({})
    }

    return (Object.keys(filters).length === 0 ? null : 
        <FilterListContainer>
            <FilterWrapper>
                {Object.entries(filters).map(filter => {
                    const fieldName = filter[0] 
                    if (Array.isArray(filter[1])) {
                        return filter[1].map(filter => <FilterItem key={uuidv4()} filters={filters} filter={filter} setFilters={setFilters} fieldName={fieldName} />)
                    }
                    return <FilterItem key={uuidv4()} filters={filters} filter={filter[1]} setFilters={setFilters} fieldName={fieldName}/>
                })  }
            </FilterWrapper>
            {Object.keys(filters).length === 0 ? null : <FilterListClear onClick={handleFilterListClear} filters={filters}>Clear</FilterListClear>}
        </FilterListContainer>
    )
}