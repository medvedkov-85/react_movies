import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        isLoading: true,
    };

    handleSearch = (str, type) => {
        this.setState({
            isLoading: true,
        });
        this.uploadFilms(str, type);
    };

    uploadFilms(str = "", filmType = "all") {
        const phrase = str ? str : "titanic";
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${phrase}`;
        if (filmType !== "all") url = `${url}&type=${filmType}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    movies: data.Search,
                    isLoading: false,
                })
            );
    }

    componentDidMount() {
        this.uploadFilms();
    }

    render() {
        const { movies, search } = this.state;

        return (
            <main className="container content">
                <Search handleSearch={this.handleSearch} />
                {this.state.isLoading ? (
                    <Preloader />
                ) : movies && movies.length ? (
                    <Movies movies={movies} />
                ) : (
                    <h4>Nothing found</h4>
                )}
            </main>
        );
    }
}

export { Main };
