import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Product from "../../components/Product";

function Favorite() {
  const router = useRouter();
  const state = useSelector((state) => state.products);
  const fav = state.filter((product) => product.favorite === true);

  if (fav.length === 0) {
    router.replace("/");
  }

  return (
    <div className="grid p-2 mt-8 gap-1 md:grid-cols-3 lg:grid-cols-4">
      {fav.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}

export default Favorite;
