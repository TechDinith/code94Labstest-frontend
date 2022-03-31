import React from "react";
import AvatarAtom from "./components/atoms/avatarAtom/avatar.atom";
import "antd/dist/antd.css";
import AdminDropDownAtom from "./components/atoms/adminDropDownAtom/adminDropDown.atom";
import HeadingAtom from "./components/atoms/headingAtom/heading.atom";
import SearchBoxAtom from "./components/atoms/searchboxAtom/searchbox.atom";

function App() {
  return (
    <div className="App">
      <SearchBoxAtom />
    </div>
  );
}

export default App;
