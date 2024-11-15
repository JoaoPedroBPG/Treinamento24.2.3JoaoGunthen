import React, { useState } from 'react';
import * as S from './styles';
import { PostProps } from '../Piu';

interface Props {
    setPius: (newpiu: PostProps) => void;
}

const NewPiu: React.FC<Props> = ({ setPius }) => {
    const [text, setText] = useState('');

    const [NewPiuText, setNewPiuText] = useState('');

    const send = () => {
        const NewPiuObj = {
            photo: 'assets/icons/MyPFP.jpg',
            username: 'Joao Pedro Gunthen',
            handle: 'JoaoPedroBPG',
            content: NewPiuText,
            comments: 0,
            likes: 0,
            retweets: 0
        };
        setPius(NewPiuObj);
        setNewPiuText('');
    };

    const handleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setText(event.target.value);
    };
    return (
        <S.InputDiv>
            <S.TextBox
                placeholder="Quero dar um piu..."
                maxLength={366}
                value={NewPiuText}
                onChange={(e) => {
                    setNewPiuText(e.target.value);
                    handleTextChange;
                }}
                isOverLimit={text.length > 140}
            />
            <S.IconsDiv>
                <S.Icons src="assets/icons/text-Icons.svg" />
                <S.ShareIcon src="assets/icons/share-Icon.svg" onClick={send} />
            </S.IconsDiv>
        </S.InputDiv>
    );
};

export default NewPiu;
