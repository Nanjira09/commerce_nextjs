import Product from "./Product";

function Container({ datas }) {
  return (
    <div className="p-2 grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 md:gap-2 lg:grid-cols-5">
      {datas.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}

export default Container;
