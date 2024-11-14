export default function MotivationSpace(props) {
  const name = 'Aman'
  text = 'This is a motivation space, where you can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals.'
  portion1 = text.slice[0, 20]
  portion2 = text.slice[20, 1000]
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-4 col-end-4 col-span-3 ${props.bgColor}`}>
        <div className="flex">
          <div>{name}<div><p>{portion1}</p></div></div>
          <p>{portion2}</p>
        </div>
      </div>
    )
}