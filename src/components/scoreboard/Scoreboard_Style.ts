import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Scoreboard = styled.div`
    font-size: 80px;
    font-weight: 700;
    width: 100%;
    padding: 40px 0;
    color:${props => props.color || theme.colors.accent};
    border-radius: 10px;
    border: 2px solid ${theme.colors.accent};
`

export const S = {
    Scoreboard
}