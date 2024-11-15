import React from 'react';
import Sidebar from 'components/Sidebar';
import Center from 'components/Center';
import LeftBar from 'components/LeftBar';
import * as S from './styles';

const Feed = () => {
    return (
        <S.Container>
            <Sidebar />
            <S.Divider />
            <Center />
            <S.Divider />
            <LeftBar />
        </S.Container>
    );
};

export default Feed;
