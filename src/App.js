import Routes from "./routes";
import GlobalStyles from "./styles/stylesGlobal";
import { TokenProvider } from "./context/TokenContext";
import { DataContextProvider } from "./context/DatasContenxt";

function App() {
  return (
    <TokenProvider>
      <DataContextProvider>
        <GlobalStyles />
        <Routes />
      </DataContextProvider>
    </TokenProvider>
  );
}

export default App;
