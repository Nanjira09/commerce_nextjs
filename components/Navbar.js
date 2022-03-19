import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { HeartIcon as Solid } from "@heroicons/react/solid";
import { ShoppingBagIcon as ShoppingSolid } from "@heroicons/react/solid";
import Link from "next/link";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state.products);
  const fav = state.filter((product) => product.favorite === true);
  const cart = state.filter((product) => product.cart === true);

  return (
    <div className="flex items-center justify-between p-2 border-b-2 fixed top-0 left-0 right-0 z-10 bg-white">
      <h2 className="font-semibold text-lg uppercase">
        <Link href="/">
          <a>shop</a>
        </Link>
      </h2>
      <ul className="flex items-center">
        <li className="ml-2 hover:scale-110">
          <SearchIcon className="h-5 w-5" />
        </li>
        <li className="ml-2 hover:scale-110">
          <UserIcon className="h-5 w-5" />
        </li>
        <li className="ml-2 hover:scale-110 relative">
          {fav.length > 0 ? (
            <>
              <Link href="/products/favorite">
                <Solid className="h-5 w-5 text-red-500 cursor-pointer" />
              </Link>
              <span className="absolute top-[-6px] right-0 flex items-center justify-center text-white text-xs p-1 bg-blue-500 h-3 w-3 rounded-full">
                {fav.length}
              </span>
            </>
          ) : (
            <HeartIcon className="h-5 w-5" />
          )}
        </li>
        <li className="ml-2 mr-1 hover:scale-110 relative">
          {cart.length > 0 ? (
            <>
              <Link href="/products/cart">
                <ShoppingSolid className="h-5 w-5 cursor-pointer" />
              </Link>
              <span className="absolute top-[-6px] right-0 flex items-center justify-center text-white text-xs p-1 bg-blue-500 h-3 w-3 rounded-full">
                {cart.length}
              </span>
            </>
          ) : (
            <ShoppingBagIcon className="h-5 w-5" />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
