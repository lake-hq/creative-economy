import Image from "next/image";

export default function IconCard2(x: any) {
  return (
    <div className="w-md flex flex-row items-center justify-center my-3">
      <div className="border-gray-300 border-2 rounded-full w-32 p-4 mb-2">
        <Image src={x.src} alt="card" width={500} height={0} />
      </div>
      <div className="text-left mx-6">
        <h6 className="my-2">{x.title}</h6>
        <p className="mb-2 pr-2 text-gray-600">{x.children}</p>
      </div>
    </div>
  );
}
