import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card" style={{ border: "1px solid red", padding: "10px", margin: "10px", textAlign: "left" }}>
         
            <pre style={{ fontSize: "12px", overflowX: "auto" }}>
                {JSON.stringify(movie, null, 2)}
            </pre>
        </div>
    );
};

export default MovieCard;