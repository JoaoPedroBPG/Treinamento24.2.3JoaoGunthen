import React from 'react';
import * as S from './styles';

const SearchBar: React.FC = () => {
    return (
        <S.SearchBar>
            <S.TextBar placeholder="Ouvir um piu..." />
            <S.SearchIcon src="assets/icons/search-Icon.svg" />
        </S.SearchBar>
    );
};

export default SearchBar;
