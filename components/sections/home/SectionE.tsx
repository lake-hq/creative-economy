import IconCard from "../../cards/IconCard";

export default function SectionE() {
  return (
    <section className="section dark-section items-center justify-center text-center">
      <div className="max-w-3xl">
        <h6 className="text-less-light">
          THERE ARE MANY VARIATIONS OF PASSAGES
        </h6>
        <h2 className="my-4">
          We <span className="text-primary">guarantee</span> the security and
          protection of your deposits
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-baseline gap-16 mt-12">
        <IconCard src="/corporate-safe-3.svg" title="Reliable saving">
          {" "}
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form.
        </IconCard>
        <IconCard src="/corporate-safe-3.svg" title="Reliable saving">
          {" "}
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form.
        </IconCard>
        <IconCard src="/corporate-safe-3.svg" title="Reliable saving">
          {" "}
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form.
        </IconCard>
      </div>
    </section>
  );
}
