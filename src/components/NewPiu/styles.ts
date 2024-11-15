import styled from 'styled-components';

export const NewPost = styled.div``;

export const TextBox = styled.textarea<{ isOverLimit?: boolean }>`
    border-radius: 16px;
    display: flex;
    justify-content: flex-start;
    background-color: #4c5155;
    height: 152px;
    width: 95%;
    border: none;
    font-size: 18px;
    color: ${({ isOverLimit }) => (isOverLimit ? 'red' : '#ffffff')};
    line-height: 1;
    padding: 5px;
    resize: none;

    ::placeholder {
        font-size: 18px;
        color: #ffffff;
        text-align: start;
    }
    &:focus {
        outline: none;
    }
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4c5155;
    border-radius: 16px;
    height: 152px;
    padding: 20px;
`;

export const IconsDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Icons = styled.img`
    height: 24 px;
    width: 148 px;
    cursor: pointer;
`;

export const ShareIcon = styled.img`
    height: 24px;
    width: 24px;
    cursor: pointer;
`;

export const CharCounter = styled.div<{ isOverLimit: boolean }>`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    color: ${({ isOverLimit }) => (isOverLimit ? 'red' : 'gray')};
`;
