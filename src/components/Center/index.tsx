import React, { useState } from 'react';
import CenterHeader from 'components/CenterHeader';
import CenterBottom from 'components/CenterBottom';
import { PostProps } from 'components/Piu';
import Pius from 'components/CenterBottom/Pius';
import * as S from './styles';

const Center: React.FC = () => {
    const [ListaDePius, setListaDePius] = useState(Pius);
    const handleNewPiu = (newpiu: PostProps) => {
        setListaDePius([newpiu].concat(ListaDePius));
    };

    return (
        <S.Center>
            <CenterHeader
                setPius={(newpiu: PostProps) => handleNewPiu(newpiu)}
            />
            <S.Divider />
            <CenterBottom pius={ListaDePius} />
        </S.Center>
    );
};

export default Center;
