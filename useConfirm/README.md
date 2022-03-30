# useConfirm

### Usage

```js
const App = () => {
  const remove = () => console.log("Removed");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Would you remove?", remove, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Remove</button>
    </div>
  );
};
```
