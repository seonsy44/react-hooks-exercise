# useInput

```js
const App = () => {
  const validator = (value) => !value.includes("#");
  const name = useInput("Ms. ", validator);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Last Name" {...name.props} />
    </div>
  );
};
```
