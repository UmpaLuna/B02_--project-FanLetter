import { createContext, useContext, useState } from "react";
import uuid from "react-uuid";
import theme from "../styledComponents/theme/theme";

// LocalDataContextAPI

const LocalDataValueContext = createContext();
const LocalDataActionsContext = createContext();

export function LocalDataProvider({ children }) {
  const [lists, setLists] = useState({});
  const characters = theme.character;
  const actionsWithData = {
    utility: {
      initialSetValue(data) {
        setLists(data);
      },
      usefindDataIndex(target, id) {
        return lists[target].findIndex((target) => target.id === id);
      },
      setLocalStorageData() {
        localStorage.setItem("Tooniverse", JSON.stringify(lists));
      },
    },
    HandleEdit: {
      useUpdateLists(Ref) {
        const letter = {
          id: uuid(),
          name: Ref.name.value,
          text: Ref.text.value,
          date: new Date().toString(),
          target: Ref.target.value,
        };

        lists[Ref.target.value].unshift(letter);
        setLists({ ...lists });
        this.setLocalStorageData();
        Ref.name.value = "";
        Ref.text.value = "";
      },
      useUpdateComment(Ref, params) {
        if (Ref.current.defaultValue === Ref.current.value)
          return alert("수정안됨");
        const targetIndex = this.utility.findDataIndex(
          params.memeber,
          params.id
        );

        lists[params.member][targetIndex].text = Ref.current.value;
        setLists((prev) => ({ ...prev }));
      },
      useRemoveComment(params) {
        const targetIndex = this.utility.findDataIndex(
          params.memeber,
          params.id
        );
        lists[params.member].splice(targetIndex, 1);

        setLists((prev) => ({ ...prev }));
        this.setLocalStorageData();
      },
    },
    filteringMember(member, id) {
      return lists[member].filter((target) => target.id === id);
    },
  };
  return (
    <LocalDataValueContext value={{ lists, characters }}>
      <LocalDataActionsContext value={actionsWithData}>
        {children}
      </LocalDataActionsContext>
    </LocalDataValueContext>
  );
}

export function useCustomDataValue() {
  try {
    const value = useContext(LocalDataValueContext);
    if (value === undefined) {
      throw new Error("Please being used within LocalDataValueContext");
    }
    return value;
  } catch (e) {
    alert(e);
  }
}

export function useCustomDataActions() {
  try {
    const value = useContext(LocalDataActionsContext);
    if (value === undefined) {
      throw new Error("please being used within LocalDataActionsContext");
    }
    return value;
  } catch (e) {
    alert(e);
  }
}

// tabCustomContextAPI

const TabValueContext = createContext();
const TabActionsContext = createContext();
export function TabContextProvider({ children }) {
  const [tab, setTab] = useState(0);
  const tabActions = {
    changeTab(arg) {
      setTab(arg);
    },
    eventChangeTab(e) {
      setTab(e.target.value);
    },
  };

  return (
    <TabActionsContext.Provider value={tabActions}>
      <TabValueContext.Provider value={tab}>
        {/* {children} */}
      </TabValueContext.Provider>
    </TabActionsContext.Provider>
  );
}

export function useCustomTabValueContext() {
  try {
    const value = useContext(TabValueContext);
    if (value === undefined) {
      throw new Error("Please being used within TabValueContext");
    }
    return value;
  } catch (e) {
    alert(e);
  }
}

export function useCustomTabActionsContext() {
  try {
    const value = useContext(TabActionsContext);
    if (value === undefined) {
      throw new Error("Please being used within TabActionsContext");
    }
    return value;
  } catch (e) {
    alert(e);
  }
}
