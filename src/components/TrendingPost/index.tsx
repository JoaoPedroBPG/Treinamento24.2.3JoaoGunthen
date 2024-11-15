import React from 'react';
import * as S from './styles';

interface Props {
    imglink: string;
    title: string;
    content: string;
}

const Trending: React.FC<Props> = ({ imglink, title, content }) => {
    return (
        <S.TrendingPost>
            <S.TrendingPic src={imglink} />
            <S.TrendingTextDiv>
                <S.Title>{title}</S.Title>
                <S.Content>{content}</S.Content>
            </S.TrendingTextDiv>
        </S.TrendingPost>
    );
};

export default Trending;
