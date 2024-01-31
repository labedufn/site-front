import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App.tsx";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
