import styled from 'styled-components'
import { COLOR_SCHEME } from '../theme'

export const FilterItemContainer = styled.div`
    display: flex;
`

export const FilterButton = styled.button`
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
    &:hover {
        background: ${COLOR_SCHEME.PRIMARY};
        color: ${COLOR_SCHEME.SECONDARY};
        border-radius: .5em 0 0 .5em;
        transition: all 250ms;
    }
`

export const FilterButtonClose = styled.span`

    background: ${COLOR_SCHEME.PRIMARY};
    font-weight: 700;
    color: ${COLOR_SCHEME.WHITE};
    display: inline-block;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 3px;
    border-radius: 0 .5em .5em 0;
    margin-right: 1em;
    margin-bottom: 1em;
    box-sizing: border-box;
    &:hover {
        background: ${COLOR_SCHEME.SECONDARY_DARKEST};
        transition: all 250ms ease-in-out;
    }
`

export default function FilterItem({ filters, filter, setFilters, fieldName}) {
  
    function handleRemoveFilter(filterValue, filterValueName) {
        const filter = filterValue
        const filterField = filterValueName
        const currentLanguages = filters.languages
        const currentTools = filters.tools

        if (filterField === 'role') {
            setFilters(current => {
                delete current.role

                return { ...current }
            })
        } else if (filterField === 'level') {
            setFilters(current => {
                delete current.level
                return { ...current }
            })
        } else if (currentLanguages !== undefined && currentLanguages.includes(filter)) {
            setFilters(current => {
                const updatedLanguages = current.languages !== undefined ? current.languages.filter(lang => lang !== filter) : []
          
                if(updatedLanguages.length === 0) {
                    delete current.languages
                    return { ...current }
                } else {
                    return { ...current, "languages": updatedLanguages }
                }
            } )
        } else if (currentTools !== undefined && currentTools.includes(filter)) {
            setFilters(current => {
                const updatedTools = current.tools !== undefined ? current.tools.filter(tool => tool !== filter) : []
                if (updatedTools.length === 0) {
                    delete current.tools
                    return { ...current }
                } else {
                    return { ...current, "tools": updatedTools }
                }
            })
        }

    }
  
    return (
        <FilterItemContainer>
                <FilterButton key={filter} onClick={() => handleRemoveFilter(filter, fieldName)}>
                    {filter}
                </FilterButton>
                <FilterButtonClose onClick={() => handleRemoveFilter(filter, fieldName)}
                > X</FilterButtonClose>
        </FilterItemContainer>
    )
}