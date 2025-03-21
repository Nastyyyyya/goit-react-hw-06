import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App";
import { store, persistor } from "./redux/store"; // Підключаємо store та persistor

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
