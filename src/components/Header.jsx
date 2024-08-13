import styled from 'styled-components'
import bgHeaderDesktop from '/images/bg-header-desktop.svg';

export const HeaderContainer = styled.div`
    height: 156px;
    background: ${(props) => props.theme.COLOR_SCHEME.PRIMARY};
    background-image: url(${bgHeaderDesktop});
    background-position-x: center;
    background-size: cover;
`
export default function Header() {
    return (
        <HeaderContainer />
    )
}
