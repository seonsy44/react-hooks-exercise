# useNetwork

### Usage

```js
const App = () => {
  const [message, setMessage] = useState("");

  const handleNetworkChange = (online) => {
    online
      ? setMessage(<h3>It's connected to the Internet.</h3>)
      : setMessage(<h3>Please connect to the Internet.</h3>);
  };

  const onLine = useNetwork(handleNetworkChange);

  return (
    <>
      <h1>{onLine ? "Online" : "Offline"}</h1>
      {message}
    </>
  );
};
```
