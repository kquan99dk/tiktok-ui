import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
  return (
    <div>
        <h1>defaultlayout</h1>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
