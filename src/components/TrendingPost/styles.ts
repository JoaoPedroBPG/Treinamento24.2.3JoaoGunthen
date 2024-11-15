import styled from 'styled-components';

export const TrendingPic = styled.img`
    height: 112px;
    width: 112px;
    margin-left: 16px;
`;

export const Title = styled.text`
    color: #ecedee;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 16px;
    cursor: pointer;
`;

export const Content = styled.text`
    color: #ecedee;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-right: 16px;
`;

export const TrendingTextDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TrendingPost = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;
