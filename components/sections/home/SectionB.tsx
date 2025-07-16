import Image from "next/image";
import InfoCard from "@/components/cards/InfoCard";

export default function SectionB() {
  return (
    <section className="section bright-section bg-foreground text-dark text-center justify-center items-center light-section">
      <div className="flex flex-col justify-center items-center max-w-5xl mt-24">
        <h2>
          We have <span className="text-primary">introduced</span> new business
          management standards
        </h2>
        <p className="py-10 lg:px-10 lg:max-w-5/6">
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of lorem ipsum, you need to be sure
          there isn't anything.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-10">
        <div className="mr-10">
          <Image
            src="/corporate-conf-img.png"
            alt="Next.js logo"
            width={800}
            height={0}
            className="w-sm my-12 sm:w-2xl"
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-5 px-4 w-screen sm:flex-row lg:w-1/2">
          <div className="flex flex-col gap-5 w-full">
            <InfoCard
              metric="+60"
              title="INVESTMENT PLANS"
              description="Randomised words which"
            />
            <InfoCard
              metric="25M"
              title="CUSTOMERS SERVED"
              description="Necessary, making this the first"
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <InfoCard
              metric="+60"
              title="INVESTMENT PLANS"
              description="Randomised words which"
            />
            <InfoCard
              metric="25M"
              title="CUSTOMERS SERVED"
              description="Necessary, making this the first"
            />
            {/* <div className="card1">
                <h2>75B+</h2>
                <h4>EXCHANGE FUND</h4>
                <p>Necessary, making this the first</p>
              </div>
              <div className="card1">
                <h2>+120</h2>
                <h4>MEETINGS HELD</h4>
                <p>Lorem, ipsum dolor.</p>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
