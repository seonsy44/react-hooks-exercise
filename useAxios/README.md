# useNotification

### Usage

```js
const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div className="App">
      <button onClick={refetch}>Refetch</button>
      <h2>{loading && "Loading"}</h2>
      {!loading &&
        data &&
        data.data.data.movies.map((movie) => <h5>{movie.title}</h5>)}
    </div>
  );
};
```
