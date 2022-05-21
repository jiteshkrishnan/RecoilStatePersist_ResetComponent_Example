import { atom } from "recoil";

// config atom which will be read by the effect below
export const ConfigAtom = atom({
  key: "ConfigAtom",
  default: {}
});

// Atom effect that will run and decide if recoil state
const persistAtom = ({ node, storeID, setSelf, onSet, getPromise }) => {
  console.log("Running ATOMIC Effect !!!!-----------------");
  console.log("Node ", node);
  console.log("storeID ", storeID);
  const { key } = node;
  getPromise(ConfigAtom).then((value) => {
    console.log("AppState Value", value);

    const { shouldPersist, appName } = value;
    const lookupKey = `RECOIL_PERSIST:${appName}:${key}`;
    if (shouldPersist) {
      const savedValue = localStorage.getItem(lookupKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        console.log("isReset ", isReset);
        isReset
          ? localStorage.removeItem(lookupKey)
          : localStorage.setItem(lookupKey, JSON.stringify(newValue));
      });
    }
  });
};

export const counter = atom({
  key: "counter",
  default: 0,
  effects: [persistAtom]
});
