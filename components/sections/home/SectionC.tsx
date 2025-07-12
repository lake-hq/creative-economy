import Image from "next/image";

export default function SectionC() {
  return (
    <section className="bg-light text-dark w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col w-1/2 px-16">
            <h2 className="py-8">
              Software for greater{" "}
              <span className="text-primary">efficiency</span> of your work
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using lorem ipsum is that it has a more-or-less normal.
            </p>
            <div className="my-10">
              <a href="" className="button1">
                VIEW MORE
              </a>
              <a href="" className="button2 mx-5">
                DOWNLOAD
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={"/corporate-window-img.jpg"}
              alt="corporate window"
              width={800}
              height={0}
              className="w-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center mt-32">
          <div className="w-1/2">
            <Image
              src={"/corporate-credit-card.jpg"}
              alt="corporate window"
              width={800}
              height={0}
              className="w-2xl"
            />
          </div>
          <div className="flex flex-col w-1/2 px-16">
            <h2 className="py-8">
              Cryptocurrency <span className="text-primary">blockchain</span>{" "}
              wallet
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using lorem ipsum is that it has a more-or-less normal.
            </p>
            <div className="flex flex-row mt-8">
              <div className="w-3/4 text-light p-4 py-2 bg-primary rounded-l-md">
                CAMPAIGN PROGRESS - $840.000
              </div>
              <div className="w-1/4 bg-foreground rounded-r-md"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="w-7/12 text-light p-4 py-2 bg-primary rounded-l-md">
                CAMPAIGN PROGRESS - $840.000
              </div>
              <div className="w-5/12 bg-foreground rounded-r-md"></div>
            </div>
            <div className="my-10">
              <a href="" className="button1">
                VIEW MORE
              </a>
              <a href="" className="button2 mx-5">
                REGISTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
