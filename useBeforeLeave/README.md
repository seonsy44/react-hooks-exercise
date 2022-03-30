# useBeforeLeave

### Usage

```js
const App = () => {
  const beforeLeave = () => console.log("User is Leaving");
  useBeforeLeave(beforeLeave);
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </>
  );
};
```
