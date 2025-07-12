import Image from "next/image";

export default function IconCard(x: any) {
  return (
    <div className="w-84 flex flex-col items-center mx-9 my-20">
      <div className="border-white border-2 rounded-full w-28 mb-2">
        <Image src={x.src} alt="card" width={500} height={0} />
      </div>
      <h6 className="my-4">{x.title}</h6>
      <p className="mb-2 text-gray-400">{x.children}</p>
      <a href="" className="border-b-2 border-gray-700">
        READ MORE
      </a>
    </div>
  );
}
