import styled from 'styled-components';

export const LeftBar = styled.div`
    display: flex;
    background-color: #1a1d1e;
    height: 100vh;
    width: 23.33333vw;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const LeftHeader = styled.div`
    display: flex;
    height: 94px;
    width: 23.33333vw;
    align-items: center;
    margin-right: 170px;
`;

export const Title = styled.text`
    color: #ecedee;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 10px;
`;

export const FireIcon = styled.img`
    height: 48px;
    widt: 48px;
    margin-left: 16px;
    margin-top: 10px;
`;

export const Noticias = styled.div``;

export const Trending = styled.div`
    display: flex;
    flex-direction: column;
    gap 48px;
    align-items: center;
`;

export const Divider = styled.div`
    background-color: #4c5155;
    height: 1px;
    width: 400px;
`;
