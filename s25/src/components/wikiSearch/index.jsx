import { useEffect, useMemo, useState } from "react";

const Search = ({ onResult }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [state, setState] = useState("");

  const fetchQuery = (query) => {
    setState("loading");

    if (query.length > 0) {
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((result) => {
          if (result?.query?.searchinfo?.totalhits === 0) {
            setState("Result not Found");
          } else {
            setResult(result);
            onResult(result);
            setState("finished");
          }
        });
    } else {
      onResult("");
      setState("");
    }
  };

  useEffect(() => {
    query.length ? setState("typing") : setState("");

    const timer = setTimeout(() => {
      fetchQuery(query);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <button type="submit" onClick={() => fetchQuery(query)}>
        Query Search
      </button>
      {state === "finished" && <small>Search is Finished!</small>}
      {state === "typing" && <small>Typing ...</small>}
      {state === "loading" && <small>Loading ...</small>}
      {state === "Result not Found" && <small>Result not Found!</small>}
    </div>
  );
};

const Result = ({ result }) => {
  if (
    !result ||
    !result.query ||
    !result.query.searchinfo ||
    !result.query.search
  ) {
    return;
  }
  return (
    <>
      <p>Total Hits: {result.query.searchinfo.totalhits}</p>
      <ol>
        {result.query.search.map((hit) => {
          return (
            <li key={hit.pageid}>
              <p>{hit.title}</p>
              <a href={`https://en.wikipedia.org/?curid=${hit.pageid}`}>
                Link to the article
              </a>
              <p>
                It will take approximately {Math.ceil(hit.wordcount / 200)}min
                to finsih reading this article
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
};

const WikiSearch = () => {
  const [hits, setHits] = useState("");
  console.log(hits);
  return (
    <>
      <Search onResult={setHits} />
      <Result result={hits} />
    </>
  );
};

export default WikiSearch;
