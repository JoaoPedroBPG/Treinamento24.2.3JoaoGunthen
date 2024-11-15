import styled from 'styled-components';

export const Center = styled.div`
    background-color: #151718;
    height: 100vh;
    width: 54.44444vw;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Divider = styled.div`
    display: flex;
    background-color: #4c5155;
    height: 1px;
    width: 982px;
    margin: 20px auto;
`;
