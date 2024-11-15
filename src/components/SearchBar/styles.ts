import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #4c5155;
    height: 40px;
`;

export const TextBar = styled.input`
    border-radius: 8px;
    display: flex;
    background-color: #4c5155;
    height: 40px;
    width: 95%;
    border: none;
    font-size: 14px;
    justify-content: center;
    color: #ffffff;
    padding-left: 8px;

    ::placeholder {
        font-size: 14px;
        color: #ffffff;
        text-align: start;
    }
    &:focus {
        outline: none;
    }
`;

export const SearchIcon = styled.img`
    display: flex;
    padding 8px;
    cursor: pointer;
`;
