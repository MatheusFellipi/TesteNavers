import Routes from "./routes";
import GlobalStyles from "./styles/stylesGlobal";
import { TokenProvider } from "./context/TokenContext";

function App() {
  return (
    <TokenProvider>
      <GlobalStyles />
      <Routes />
    </TokenProvider>
  );
}

export default App;
