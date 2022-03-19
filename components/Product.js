import {
  StarIcon,
  HeartIcon as Solid,
  ShoppingCartIcon as ShoppingSolid,
} from "@heroicons/react/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addAction, addCart } from "../context/actions";

function Product({ data }) {
  // console.log(data);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addAction(id));
  };

  const handleCart = (id) => {
    dispatch(addCart(id));
  };
  return (
    <div className="max-w-md border-2 rounded-md">
      <div className="flex justify-center items-center">
        <Image src={data.image} alt={data.title} width={144} height={144} />
      </div>
      <div className="p-1">
        <p className="flex items-center justify-between">
          <span>{data.category}</span>
          {data.favorite ? (
            <Solid
              className="h-3 w-3 text-red-600 cursor-pointer"
              onClick={() => handleClick(data.id)}
            />
          ) : (
            <HeartIcon
              className="h-3 w-3 cursor-pointer"
              onClick={() => handleClick(data.id)}
            />
          )}
        </p>
        <p className="truncate font-medium">{data.title}</p>
        <p className="flex">
          {Array(Math.ceil(data.rating?.rate)).fill(
            <StarIcon className="h-4 w-4 text-red-400" />
          )}
        </p>
        <p className="flex items-center justify-between">
          <span>${data.price}</span>
          {data.cart ? (
            <ShoppingSolid
              className="h-4 w-4 cursor-pointer"
              onClick={() => handleCart(data.id)}
            />
          ) : (
            <ShoppingCartIcon
              className="h-4 w-4 cursor-pointer"
              onClick={() => handleCart(data.id)}
            />
          )}
        </p>
      </div>
    </div>
  );
}

export default Product;
