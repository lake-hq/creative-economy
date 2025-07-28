import Image from "next/image";

export default function IconCard(x: any) {
  return (
    <div className=" max-w-xl lg:w-84 flex flex-col items-center xl:mx-9">
      <div className="border-less-light border-2 rounded-full w-28 p-2 mb-2">
        <Image src={x.src} alt="card" width={500} height={0} />
      </div>
      <h6 className="my-4">{x.title}</h6>
      <p className="mb-2 text-less-light">{x.children}</p>
      <a
        href=""
        className="border-b-2 border-gray-700 hover:border-primary transition-all"
      >
        READ MORE
      </a>
    </div>
  );
}
