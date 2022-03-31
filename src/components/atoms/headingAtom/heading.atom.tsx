import "./heading.styles.scss";

const HeadingAtom = (props: any) => {
  return (
    <>
      <h1>{props.headingText}</h1>
    </>
  );
};

export default HeadingAtom;
