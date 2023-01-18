import Tabs from "./components/Tabs/Tabs";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      Home
      <button>Hola</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Tabs
        tabs={[
          { title: "Home", content: <Home /> },
          { title: "About", content: "about" },
          { title: "Shop", content: "Shop" },
        ]}
      />
    </div>
  );
}

export default App;
