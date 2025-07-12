import IconCard from "../../cards/IconCard";

export default function SectionE() {
  return (
    <section className="items-center justify-center text-center">
      <div className="w-3xl">
        <h6 className="text-gray-400">THERE ARE MANY VARIATIONS OF PASSAGES</h6>
        <h2 className="my-4">
          We <span className="text-primary">guarantee</span> the security and
          protection of your deposits
        </h2>
      </div>
      <div className="flex flex-row justify-center items-baseline">
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
