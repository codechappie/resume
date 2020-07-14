import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
    const NavBarStyled = styled.div`
        width: 100%;
        height: 70px;
        background: #304ffe;
        display: flex;
        align-items: center;
    `;
    const ContainerNavBar = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1100px;
        margin: auto;
    `;
    const LogoStyled = styled.div`
        display: flex;
        align-items: center;
    `;
    const DropdownStyled = styled.div`
        
    `;
    return (
        <NavBarStyled>
            <ContainerNavBar>
                <LogoStyled>
                    <img src="https://codechappie.github.io/images/logo.png" alt="logo"/>
                </LogoStyled>
                <DropdownStyled>
                    <button>Button</button>
                </DropdownStyled>
            </ContainerNavBar>
            
        </NavBarStyled>
    )
}

export default NavBar
