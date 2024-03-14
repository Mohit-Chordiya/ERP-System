import Main_Screen from "./components/Main/Main-Screen";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll";
        };
    }, []);
    return <Main_Screen />;
}

export default App;
