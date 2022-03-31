import React from "react";
import AvatarAtom from "./components/atoms/avatarAtom/avatar.atom";
import "antd/dist/antd.css";
import AdminDropDownAtom from "./components/atoms/adminDropDownAtom/adminDropDown.atom";
import HeadingAtom from "./components/atoms/headingAtom/heading.atom";

function App() {
  return (
    <div className="App">
      <HeadingAtom headingText="PRODUCTS" />
    </div>
  );
}

export default App;
