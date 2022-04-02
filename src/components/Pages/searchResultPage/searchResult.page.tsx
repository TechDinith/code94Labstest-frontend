import UpperPageOrg from "../../organisms/upperPageOrg/upperPage.org";
import ContentListAtom from "../../atoms/contentListAtom/contentList.atom";
import { useSelector } from "react-redux";

const SearchResultPage = () => {
  const { result } = useSelector((state: any) => state.adminSlice);

  const { data } = useSelector((state: any) => state.adminSlice);

  const filtered = data.filter((product: any) => product.name.includes(result));

  return (
    <div style={{ margin: 40 }}>
      <UpperPageOrg data={data} />
      <br />
      <h2 style={{ color: "#969191" }}>
        {filtered.length} results found for '{result}'
      </h2>
      <div style={{ marginLeft: 100, marginRight: 100, marginTop: 50 }}>
        <ContentListAtom data={filtered} />
      </div>
    </div>
  );
};

export default SearchResultPage;
