export default function InfoCard(props: any) {
  return (
    <div className="flex flex-col">
      <div className="card1">
        <h2 className="uppercase">{props.metric}</h2>
        <h4 className="uppercase">{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
