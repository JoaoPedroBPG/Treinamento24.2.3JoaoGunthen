import React from 'react';
import { PostProps } from 'components/Piu';
import SearchBar from '../SearchBar';
import NewPiu from '../NewPiu';
import * as S from './styles';

interface Props {
    setPius: (newpiu: PostProps) => void;
}

const CenterHeader: React.FC<Props> = ({ setPius }) => {
    return (
        <S.CenterHeader>
            <SearchBar />
            <NewPiu setPius={(newpiu: PostProps) => setPius(newpiu)} />
        </S.CenterHeader>
    );
};

export default CenterHeader;
