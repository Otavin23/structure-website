import { Home } from "./page/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ProviderValues } from "./context";

function App() {
  return (
    <>
      <ProviderValues>
        <GlobalStyles />
        <Home />
      </ProviderValues>
    </>
  );
}

export default App;
