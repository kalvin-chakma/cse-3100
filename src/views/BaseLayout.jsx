import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout max-w-screen-lg mx-auto shadow-md">
      <header className="d-flex align-items-center bg-light shadow-md">
        <h1>
          <Link className="text-decoration-none text-dark font-bold text-2xl" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item flex jistify-between">
              <Link className="nav-link" to="/about-us">
                About us
              </Link>
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
              <Link className="nav-link" to="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
