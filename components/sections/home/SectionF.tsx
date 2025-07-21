import Image from "next/image";
import IconCard2 from "../../cards/IconCard2";

export default function SectionF() {
  return (
    <section className="section bright-section items-center justify-center text-center bg-light text-dark">
      <h6 className="text-less-dark">THERE ARE MANY VARIATIONS OF PASSAGES</h6>
      <h2 className="my-6 max-w-xl">
        All-in-one <span className="text-primary">mobile app</span> for managing
        your finances
      </h2>
      <div className=" flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center justify-center">
          <IconCard2 src="corporate-safe-3.svg" title="Account management">
            Words, consectetur, from a lorem ipsum passage, and going through
            the.
          </IconCard2>
          <IconCard2 src="corporate-safe-3.svg" title="Account management">
            Words, consectetur, from a lorem ipsum passage, and going through
            the.
          </IconCard2>
          <IconCard2 src="corporate-safe-3.svg" title="Account management">
            Words, consectetur, from a lorem ipsum passage, and going through
            the.
          </IconCard2>
        </div>
        <div className="flex flex-col sm:flex-row mt-12 gap-20 items-center justify-center">
          <div>
            <Image
              src="/corporate-mobile-app.png"
              alt="mobile app"
              width={240}
              height={0}
            />
          </div>
          <div>
            <Image
              src="/corporate-mobile-app-people.png"
              alt="mobile app"
              width={300}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
