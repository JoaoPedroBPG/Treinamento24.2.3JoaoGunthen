import React, { useState } from 'react';
import * as S from './styles';

export interface PostProps {
    photo: string;
    username: string;
    handle: string;
    content: string;
    comments: number;
    likes: number;
    retweets: number;
}

const Piu: React.FC<PostProps> = ({
    photo,
    username,
    handle,
    content,
    likes,
    retweets,
    comments
}) => {
    const [filled, setFilled] = useState(false);
    const change = () => {
        setFilled(!filled);
    };

    const [filled2, setFilled2] = useState(false);
    const change2 = () => {
        setFilled2(!filled2);
    };

    return (
        <S.Piu>
            <S.PiuPicDiv>
                <S.ProfileImage src={photo} alt="User profile" />
                <S.UserInfo>
                    <S.Username>{username}</S.Username>
                    <S.UserHandle>@{handle}</S.UserHandle>
                </S.UserInfo>
            </S.PiuPicDiv>

            <S.Content>{content}</S.Content>

            <S.Actions>
                <S.IconDiv onClick={change}>
                    {filled ? (
                        <>
                            <S.ActionIcon src="assets/icons/blueHeart-icon.svg" />
                            <S.LikeNumber>{likes + 1}</S.LikeNumber>
                        </>
                    ) : (
                        <>
                            <S.ActionIcon src="assets/icons/hollowHeart-icon.svg" />
                            <S.LikeNumber>{likes}</S.LikeNumber>
                        </>
                    )}
                </S.IconDiv>

                <S.IconDiv onClick={change2}>
                    {filled2 ? (
                        <>
                            <S.ActionIcon src="assets/icons/blueArrow-icon.svg" />
                            <S.LikeNumber>{retweets + 1}</S.LikeNumber>
                        </>
                    ) : (
                        <>
                            <S.ActionIcon src="assets/icons/hollowArrow-icon.svg" />
                            <S.LikeNumber>{retweets}</S.LikeNumber>
                        </>
                    )}
                </S.IconDiv>

                <S.IconDiv>
                    <S.ActionIcon src="assets/icons/hollowChat-icon.svg" />
                    <S.LikeNumber>{comments}</S.LikeNumber>
                </S.IconDiv>
            </S.Actions>
        </S.Piu>
    );
};

export default Piu;
