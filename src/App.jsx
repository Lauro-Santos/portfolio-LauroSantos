import useSmoothScroll from "hooks/useSmoothScroll";
import Home from "./pages/Home";
import "./styles/globalStyles.scss";

function App() {
  useSmoothScroll();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
