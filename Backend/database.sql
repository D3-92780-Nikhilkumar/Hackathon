CREATE TABLE users (
    id INT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password TEXT,
    mobile TEXT,
    birth DATE
);

-- Create the movies table (ALTERNATIVE FIX)
CREATE TABLE movies (
    id INT PRIMARY KEY,
    title TEXT NOT NULL,
    release_date DATE -- Renamed the column
);


CREATE TABLE reviews (
    id INT PRIMARY KEY,
    movie_id INT,
    review TEXT,
    rating INT,
    user_id INT,
    modified TIMESTAMP,
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE shares (
    review_id INT,
    user_id INT,
    FOREIGN KEY (review_id) REFERENCES reviews(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
    -- This table resolves a many-to-many relationship and can use both fields as a composite primary key if needed, 
    -- but based strictly on the diagram, no PK was listed for this specific table.
);
