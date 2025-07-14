import Image from "next/image";
import InfoCard from "@/components/cards/InfoCard";

export default function SectionB() {
  return (
    <section className="bg-foreground text-dark text-center justify-center items-center">
      <div className="flex flex-col justify-center items-center w-5xl mt-10">
        <h2>
          We have <span className="text-primary">introduced</span> new business
          management standards
        </h2>
        <p className="p-10 w-4xl">
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of lorem ipsum, you need to be sure
          there isn't anything.
        </p>
      </div>
      <div className="flex flex-row gap-6 justify-center items-center py-10">
        <div className="mr-10">
          <Image
            src="/corporate-conf-img.png"
            alt="Next.js logo"
            width={800}
            height={0}
            className="w-2xl"
          />
        </div>
        <div className="flex flex-col gap-5">
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
        <div className="flex flex-col gap-5">
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
    </section>
  );
}
