import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
          </div>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
