export default function MotivationSpace(props) {
  const name = 'Aman'
  const text = 'This is a motivation space, where you can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals.'
  const portion1 = text.slice(0, 20)
  const portion2 = text.slice(20, 1000)
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-4 col-end-4 col-span-3 ${props.bgColor}`}>
        <div className="flex flex-col">
          <div className="flex"><span className="text-2xl">{name}: </span><div><p>{portion1}</p></div></div>
          <p>{portion2}</p>
        </div>
      </div>
    )
}