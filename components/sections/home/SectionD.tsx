import Image from "next/image";

export default function SectionD() {
  return (
    <section className="bg-primary section dark-section">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col justify-center items-start max-w-3xl">
          <h6 className="text-less-light">THERE ARE MANY VARIATIONS</h6>
          <h2 className="mt-6">
            Advantages of becoming a customer of our company.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-12 mb-4 gap-4">
            <div className="flex items-center">
              <h2>1.</h2>
              <div className="px-4">
                <h6>Blockchain Strategy</h6>
                <p className="max-w-md">
                  Words, consectetur, from a lorem ipsum passage, and going
                  through the world cities.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <h2>2.</h2>
              <div className="px-4">
                <h6>Extended Support</h6>
                <p className="max-w-md">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-4">
            <div className="flex items-center">
              <h2>3.</h2>
              <div className="px-4">
                <h6>ICO Marketing</h6>
                <p className="max-w-md">
                  It is a long established fact that a reader will be distracted
                  by the readable page content.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <h2>4.</h2>
              <div className="px-4">
                <h6>High Liquidity</h6>
                <p className="max-w-md">
                  Contrary to popular belief, lorem ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center ml-8 my-6">
            <a href="" className="button3">
              VIEW MORE
            </a>
            <a href="" className="button2 mx-6">
              DOWNLOAD
            </a>
          </div>
        </div>
        <div className=" max-w-4xl">
          <Image
            src="/corporate-laptop-img.png"
            alt="corporate laptop"
            width={800}
            height={0}
            className="w-6xl"
          />
        </div>
      </div>
    </section>
  );
}
