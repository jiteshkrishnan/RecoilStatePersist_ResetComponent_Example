import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import { ConfigAtom } from "./atoms";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
/**
 * Initialize the config atom which will be read by the atom effect
 */
root.render(
  <RecoilRoot
    initializeState={({ set }) => {
      set(ConfigAtom, {
        appName: "@ico/internal-countdemo",
        shouldPersist: true
      });
    }}
  >
    <App />
  </RecoilRoot>
);
