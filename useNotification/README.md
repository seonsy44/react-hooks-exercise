# useNotification

### Usage

```js
const App = () => {
  const triggerNotif = useNotification("To do", { body: "coding" });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Click</button>
    </div>
  );
};
```
