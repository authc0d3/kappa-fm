import { createRoot } from "react-dom/client";
import "atropos/css";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
