import Image from "next/image";

function Banner({ data }) {
  // console.log(data);
  return (
    <div className="flex items-center justify-around py-2">
      <Image src={data.image} width={500} height={500} alt={data.title} />
      <div className="p-2">
        <p className="font-semibold text-2xl italic">Must Have</p>
        <h2 className="font-bold text-lg">{data.title}</h2>
        <p>{data.description}</p>
        <p>Starting at ${data.price}</p>
      </div>
    </div>
  );
}

export default Banner;
