import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/viewedPagesSlice';

function Navbar() {
  const viewedPageList = useSelector((state: RootState) => state.viewedPagesSlice);
  return (
    <div className="navbar">
      <div className="navbar__title-container">
        <div className="navbar__title-log">Logo</div>
        <div className="navbar__title">PipingClass</div>
      </div>
      <div className="navbar__content-container">
        <div className="navbar__page-stacks">
          {viewedPageList.map((page, idx) => {
            return page === 'Home' ? (
              <Link to="/">
                <div key={idx} className="stack__item">
                  {page}
                </div>
              </Link>
            ) : (
              <Link to={`/${page}`}>
                <div key={idx} className="stack__item">
                  {page}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="navbar__toogle-button"></div>
      </div>
    </div>
  );
}

export default Navbar;
