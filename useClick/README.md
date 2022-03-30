# useTitle

### Usage

```js
const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

  const clickHome = () => {
    setIsHome(true);
    setIsMenu(false);
  };
  const clickMenu = () => {
    setIsHome(false);
    setIsMenu(true);
  };

  const home = useClick(clickHome);
  const menu = useClick(clickMenu);
  return (
    <div className="App">
      <button ref={home}>Home</button>
      <button ref={menu}>Menu</button>
      {isHome && <h1>Welcome Home</h1>}
      {isMenu && <h1>Here is Menu</h1>}
    </div>
  );
};
```
