/* eslint-disable react/no-array-index-key */
import React from 'react';
import Piu, { PostProps } from '../Piu';
import * as S from './styles';

interface PropsPius {
    pius: PostProps[];
}

const CenterBottom: React.FC<PropsPius> = ({ pius }) => {
    return (
        <S.CenterBottom>
            {pius.map((piu, index) => (
                <Piu
                    photo={piu.photo}
                    username={piu.username}
                    handle={piu.handle}
                    content={piu.content}
                    comments={piu.comments}
                    likes={piu.likes}
                    retweets={piu.retweets}
                    key={index}
                />
            ))}
        </S.CenterBottom>
    );
};

export default CenterBottom;
