import React, { useContext } from "react";
import Link from "next/link";
import { ICategory } from "../types";

const categories = [
  { name: "Web Development", slug: "webdev" },
  { name: "React", slug: "react" },
];

const Header = () => {
  return (
    <header className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-8 border-b border-blue-400">
        <h1 className="block md:float-left">
          <Link href="/">
            <a className="text-4xl font-bold text-white cursor-pointer">
              Afanami Blogs
            </a>
          </Link>
        </h1>
        <nav className="hidden md:float-left md:contents">
          {categories.map((category: ICategory) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <a className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
                {category.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
