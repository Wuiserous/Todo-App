export default function MotivationSpace(props) {
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-4 col-end-4 col-span-3 ${props.bgColor}`}>
        <div className="flex">
          <div>{name}<div><p>{text}</p></div></div>
          <p>this is a motivation space, where you can add your motivations and goals to achieve your goals.</p>
        </div>
      </div>
    )
}