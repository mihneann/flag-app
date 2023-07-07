
import Wrapper from "./Wrapper";
import { ThemeProvider } from "../ThemeContext";



function App() {
  return (
        <ThemeProvider>
          <Wrapper/>
        </ThemeProvider>
  )
}

export default App;
