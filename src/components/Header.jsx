import styled from 'styled-components'
import { COLOR_SCHEME } from '../theme'

export const HeaderContainer = styled.div`
    height: 156px;
    background: ${COLOR_SCHEME.PRIMARY};
    background-image: url('images/bg-header-desktop.svg');
    background-position-x: center;
    background-size: cover;
`
export default function Header() {
    return (
        <HeaderContainer />
    )
}
