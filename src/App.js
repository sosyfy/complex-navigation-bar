import Navbar from "./components/navbar/Navbar";
import { SidebarProvider } from "./Contexts/SidebarContext";
import {BrowserRouter } from 'react-router-dom'
import MainPage from "./pages/mainPage/MainPage";
function App() {
  return (
    <div className="App">
      <SidebarProvider>
        <BrowserRouter>
          <Navbar />
          <MainPage />
        </BrowserRouter>
      </SidebarProvider>
    </div>
  );
}

export default App;
