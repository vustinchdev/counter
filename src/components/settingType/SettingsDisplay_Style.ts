import styled from "styled-components";
import { theme } from "../../styles/Theme";

const SettingsDisplay = styled.div`
display: flex;
flex-direction: column;
border: 2px solid ${theme.colors.accent};
width: 100%;
padding: 25px 20px;
border-radius: 10px;

& > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 30px;
    font-weight: 700;
    color: ${theme.colors.accent}
}

li + li {
    margin-top: 40px;
}
`

const StyledInput = styled.input`
    width: 50%;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.accent};
    outline: none;
`

export const S = {
    SettingsDisplay,
    StyledInput
}