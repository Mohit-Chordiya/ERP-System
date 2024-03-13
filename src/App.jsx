import Sidebar from "./components/Sidebar/Sidebar";
import Main_Screen from "./components/Main/Main-Screen";
import "./App.css";

function App() {
    return (
        <div className="container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="main-container">
                <Main_Screen className="main" />
            </div>
        </div>
    );
}

export default App;
