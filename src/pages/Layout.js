import { Outlet, Link } from 'react-router-dom';
import './../App.css';
import top from './../images/top.jpg';
import { TopBox, MenuBox } from './../styles/Styles.js';

const Layout = () => {
  return (
    <>
      <TopBox
        style={{ backgroundImage: `url(${top})`, backgroundRepeat: 'repeat' }}
      >
        MOVIE LISTING - ODEON
      </TopBox>

      <MenuBox>
        <span>
          <Link to="/Movie1"> LORD OF THE RINGS 1</Link> #
        </span>
        <span>
          <Link to="/Movie2"> LORD OF THE RINGS 2</Link> #
        </span>
        <span>
          <Link to="/Movie3"> LORD OF THE RINGS 3</Link> #
        </span>
        <span>
          <Link to="/Movie4"> AVATAR 1</Link> #
        </span>
        <span>
          <Link to="/Movie5"> AVATAR 2</Link> #
        </span>
        <span>
          <Link to="/BookingsList"> Bookings List </Link> #
        </span>
        <span>
          <Link to="/ReviewsList"> Reviews List</Link>
        </span>
      </MenuBox>

      <Outlet />
    </>
  );
};

export default Layout;
