import styled from 'styled-components';
import Title from '../Title';

export const StyledTitle = styled(Title)`
    color: ${(props) => props.theme.mode === "dark" ? '#dfdede' : '#333'};
`;
