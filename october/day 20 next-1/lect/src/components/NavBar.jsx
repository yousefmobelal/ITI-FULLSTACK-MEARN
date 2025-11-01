import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/blog/firstblog"
                >
                  First_Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/blog/secondblog"
                >
                  Second_Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/products"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/docs"
                >
                  Documents
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/recipes"
                >
                  Recipes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
