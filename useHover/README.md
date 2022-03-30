# useTitle

### Usage

```js
const App = () => {
  const changeColor = (color) => {
    return (event) => {
      event.target.style.color = color;
    };
  };
  const red = useHover(changeColor("red"));

  return (
    <div className="App">
      <span ref={red} style={{ color: "black" }}>
        Hi
      </span>
    </div>
  );
};
```
