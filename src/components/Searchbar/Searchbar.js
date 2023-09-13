import React, { Component } from 'react';
import { toast } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { Conteiner, SearchForm, SearchInput } from "./Searchbar.styled";


class Searchbar extends Component {
    state = {
        query: '',
        prevQuery: '',
    };

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    };

    handleSearch = () => {
        const { query, prevQuery } = this.state;

        if (!query.trim()) {
            toast.error('Write your search');
            return;
        }

        if (query !== prevQuery) {
            this.props.onSubmit(query);
        } else {
            toast.error('The search query is the same as the previous one.');
        }

        this.setState({ prevQuery: query });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    };

    render() {
        const { query } = this.state;

        return (
            <Conteiner>
                <SearchForm>
                    <SearchInput
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button

                        type="button"
                        className="SearchForm-button"
                        onClick={this.handleSearch}
                    >
                        <FaSearch />
                    </button>
                </SearchForm>
            </Conteiner>
        );
    }
}

export default Searchbar;
