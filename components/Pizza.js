import Image from "next/image";
import Link from "next/link";
const Pizza = ({
  pizzaProps: {
    name,
    about,
    pizzaSizes: { small },
    slug,
    coverimage: { alt, imageUrl },
  },
}) => {
  return (
    <div className="rounded-md p-2 text-center bg-slate-200 hover:bg-slate-300 cursor-pointer text-black ">
      <Link href={`/product/${slug}`}>
        {" "}
        <div className="relative w-full h-32  py-2 md:py-4 ">
          <Image src={imageUrl} fill alt={alt} className="object-contain " />
        </div>
        <h2 className="my-2 w-full text-red-800 font-bold md:text-lg">
          {name}
        </h2>
        <p className="my-3 md:my-4 font-bold">
          from{" "}
          <span className="text-lg text-italic text-amber-800">${small}</span>
        </p>
        <p className="w-full  lg:w-10/12 text-sm md:text-base mx-auto my-2 md:my-4 text-black">
          {about}
        </p>
      </Link>
    </div>
  );
};

export default Pizza;
