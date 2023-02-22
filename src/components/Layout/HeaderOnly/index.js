import Header from '~/components/Layout/components/Header';
function HeadOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default HeadOnly;
