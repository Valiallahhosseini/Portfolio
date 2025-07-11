import { useEffect, useState } from "react";

const Search = ({ onResult }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [state, setState] = useState("idle");
  const fetchUserInfo = (username) => {
    setState("pending");
    fetch(`http://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          console.log("Error");
        }
        return response.json();
      })
      .then((result) => {
        setResult(result);
        console.log(result);
        onResult(result);
        setState("");
      });
  };

  useEffect(() => {
    // debounce
    if (!query.length) {
      return;
    }
    setState("typing");
    const timer = setTimeout(() => {
      fetchUserInfo(query);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => fetchUserInfo(query)}>Search User</button>
        <div>{state}</div>
      </div>
    </>
  );
};
const Result = ({ user }) => {
  return (
    <>
      {!!user && (
        <>
          <img src={user.avatar_url} alt="" width={200} height={200} />
          <div>{user.name}</div>
          <div>
            <a href={user.html_url}>{user.login}</a>
          </div>
        </>
      )}

      <div>
        {user.username}
        <a href={user.events_url}></a>
      </div>
    </>
  );
};

const GitHubUserSearch = () => {
  const [user, setUser] = useState("");
  return (
    <>
      <Search onResult={setUser} />
      <Result user={user} />
    </>
  );
};

export default GitHubUserSearch;
