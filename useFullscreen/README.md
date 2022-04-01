# useFullscreen

### Usage

```js
const App = () => {
  const onFull = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { ref, triggerFull, exitFull } = useFullscreen(onFull);
  return (
    <>
      <div className="App">
        <div ref={ref} style={{ backgroundColor: "cornflowerblue" }}>
          <h1>Hello World</h1>
          <button onClick={triggerFull}>Make Fullscreen</button>
          <button onClick={exitFull}>Exit Fullscreen</button>
        </div>
      </div>
    </>
  );
};
```
