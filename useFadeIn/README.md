# useFadeIn

### Usage

```js
const App = () => {
  const [state, setState] = useState({ home: true, menu: false });
  const fadeIn = useFadeIn(2, 0);

  return (
    <>
      <div className="App">
        <button
          onClick={() => {
            setState(({ home, menu }) => {
              return { home: !home, menu: !menu };
            });
          }}
        >
          {state.home ? "Menu" : "Home"}
        </button>
        {state.home && <h1 {...fadeIn}>Welcome Home</h1>}
        {state.menu && <h1 {...fadeIn}>This is Menu</h1>}
      </div>
    </>
  );
};
```
