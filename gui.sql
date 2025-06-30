CREATE DATABASE data_source
WITH ENGINE = 'files',
PARAMETERS = {
  "path": "E:/pp/mindsdb-search-app/backend/data.csv"
};

CREATE TABLE top_picks
FROM data_source (
  SELECT * FROM data
);

CREATE INDEX description_index
ON top_picks (description)
USING 'text-embedding-ada-002';

SELECT *
FROM top_picks
WHERE MATCH('opportunities in edtech startups');
