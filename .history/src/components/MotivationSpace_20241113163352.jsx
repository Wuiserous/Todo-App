export default function MotivationSpace(props) {
  const name = 'Aman'
  const text = '  This is a motivation space, where you can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals. You can add your motivations and goals to achieve your goals.'
  const portion1 = text.slice(0, 30)
  const portion2 = text.slice(30, 1000)
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-4 col-end-4 col-span-3 ${props.bgColor} flex items-center flex-col gap-2`}>
        
      </div>
    )
}