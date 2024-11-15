import React from 'react';
import TrendingPost from 'components/TrendingPost';
import * as S from './styles';

const LeftBar: React.FC = () => {
    return (
        <S.LeftBar>
            <S.LeftHeader>
                <S.FireIcon src="assets/icons/fire-Icon.svg" />
                <S.Title>Pius em alta</S.Title>
            </S.LeftHeader>
            <S.Trending>
                <S.Divider />
                <TrendingPost
                    imglink="assets/icons/trending1.png"
                    title="Eleições 2022"
                    content="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
                />
                <S.Divider />
                <TrendingPost
                    imglink="assets/icons/trending2.jpg"
                    title="Flamengo campeão"
                    content="MENGOOOOOOOOOOOOOOOOOOOOOOO, mais uma Copa do Brasil pra conta!!"
                />
                <S.Divider />
                <TrendingPost
                    imglink="assets/icons/trending3.jpg"
                    title="Homem-aranha faz reféns no PJR"
                    content="O miranha não aguentou na porrada e foi armado ao PJR"
                />
                <S.Divider />
                <TrendingPost
                    imglink="assets/icons/trending5.jpg"
                    title="O gigante acordou e vai brigar pelo título!!!"
                    content="Kick boundóvski marca mais uma AT!!"
                />
                <S.Divider />
                <TrendingPost
                    imglink="assets/icons/trending4.png"
                    title="Vôlei"
                    content="Sérvia derrota o Brasil e é campeã mundial de vôlei feminino"
                />
                <S.Divider />
            </S.Trending>
        </S.LeftBar>
    );
};

export default LeftBar;
