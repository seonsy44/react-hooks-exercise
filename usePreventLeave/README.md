# usePreventLeave

### Usage

```js
const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };
  return (
    <div className="App">
      <button onClick={saveChanges}>Protect</button>
    </div>
  );
};
```
