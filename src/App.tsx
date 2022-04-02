import React from "react";
import AvatarAtom from "./components/atoms/avatarAtom/avatar.atom";
import "antd/dist/antd.css";
import AdminDropDownAtom from "./components/atoms/adminDropDownAtom/adminDropDown.atom";
import HeadingAtom from "./components/atoms/headingAtom/heading.atom";
import SearchBoxAtom from "./components/atoms/searchboxAtom/searchbox.atom";
import NewProductBtnAtom from "./components/atoms/newProductBtnAtom/newproduct.btn.atom";
import FavoritBtnAtom from "./components/atoms/favoritBtnAtom/favorit.btn.atom";
import ContentAtom from "./components/atoms/contentTableAtom/contentTable.atom";
import AdminDropDownAvatarMol from "./components/molecules/adminDropdownAvatarMol/adminDropdownAvatar.mol";
import NewProductBtnFavoritBtnMol from "./components/molecules/newProductBtnFavoritBtnMol/newProductBtnFavoritBtn.mol";
import UpperPageOrg from "./components/organisms/upperPageOrg/upperPage.org";
import ProductsPage from "./components/Pages/productsPage/products.page";
import SearchResultPage from "./components/Pages/searchResultPage/searchResult.page";

function App() {
  return (
    <div className="App">
      <ProductsPage />
      {/* <SearchResultPage /> */}
    </div>
  );
}

export default App;
