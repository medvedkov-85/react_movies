import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    handleClick = () => {
        this.props.handleSearch(this.state.search, this.state.type);
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.handleSearch(this.state.search, this.state.type);
        }
    };

    handleType = (event) => {
        this.setState(
            () => ({ type: event.target.value }),
            () => {
                this.props.handleSearch(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s8">
                        <input
                            placeholder="Search phrase"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onKeyDown={this.handleKey}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                        />
                    </div>

                    <div className="col s4">
                        <button
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="actionSearch"
                            onClick={this.handleClick}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="">
                    <p>
                        <label className="mr-radio">
                            <input
                                name="type"
                                className="with-gap"
                                type="radio"
                                value="all"
                                checked={this.state.type === "all"}
                                onChange={this.handleType}
                            />
                            <span>All</span>
                        </label>
                        <label className="mr-radio">
                            <input
                                name="type"
                                type="radio"
                                value="movie"
                                checked={this.state.type === "movie"}
                                onChange={this.handleType}
                            />
                            <span>Movie</span>
                        </label>
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="series"
                                checked={this.state.type === "series"}
                                onChange={this.handleType}
                            />
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export { Search };
