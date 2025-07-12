import Image from "next/image";

export default function SectionD() {
  return (
    <section className="bg-primary text-white">
      <div className="flex flex-row items-center justify-center">
        <div>
          <h6>THERE ARE MANY VARIATIONS</h6>
          <h2 className="my-6">
            Advantages of becoming a customer of our company.
          </h2>
          <div className="flex flex-row items-center justify-center my-12">
            <h2>1.</h2>
            <div className="px-4">
              <h6>Blockchain Strategy</h6>
              <p>
                Words, consectetur, from a lorem ipsum passage, and going
                through the world cities.
              </p>
            </div>
            <h2>2.</h2>
            <div className="px-4">
              <h6>Extended Support</h6>
              <p>
                There are many variations of passages of lorem ipsum available,
                but the majority have.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center my-6">
            <h2>3.</h2>
            <div className="px-4">
              <h6>ICO Marketing</h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable page content.
              </p>
            </div>
            <h2>4.</h2>
            <div className="px-4">
              <h6>High Liquidity</h6>
              <p>
                Contrary to popular belief, lorem ipsum is not simply random
                text. It has roots in a piece.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <a href="" className="button3">
              VIEW MORE
            </a>
            <a href="" className="button2 mx-6">
              DOWNLOAD
            </a>
          </div>
        </div>
        <div>
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
