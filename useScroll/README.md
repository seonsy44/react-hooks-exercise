# useScroll

### Usage

```js
const App = () => {
  const { y } = useScroll();
  return (
    <>
      <div className="App" style={{ height: "200vh" }}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
          Hi
        </h1>
      </div>
    </>
  );
};
```
