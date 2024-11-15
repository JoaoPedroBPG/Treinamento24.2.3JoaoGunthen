import styled from 'styled-components';

export const Piu = styled.div`
    display: flex;
    height: 251px;
    width: 983px;
    align-items: flex-start;
    padding: 24px;
    background-color: #202425;
    color: #fff;
    border-radius: 16px;
    flex-direction: column;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
`;

export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 15px;
    border-radius: 50%;
    border: 4px solid #00acee;
    margin-bottom: 16px;
    cursor: pointer;
`;

export const Username = styled.div`
    color: #ecedee;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
`;

export const PiuPicDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserHandle = styled.div`
    color: #ecedee;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
`;

export const Content = styled.div`
    color: #ecedee;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    margin-top 16px;
`;

export const Actions = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 50px;
`;

export const ActionIcon = styled.img`
    height: 24px;
    width: 24px;
`;

export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    gap: 5px;
`;

export const LikeNumber = styled.text`
    font-size: 18px;
`;
