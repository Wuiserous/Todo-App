export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = props.cards


  // Function to organize cards into 3 columns
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].reverse().map((card, index) => (
          <div className='w-full h-fit border p-2 rounded-xl'key={index}><h3>{card.title}</h3><p>{card.description}</p></div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].reverse().map((card, index) => (
          <div className='w-full h-fit border p-2 rounded-xl' key={index}><h3>{card.title}</h3><p>{card.description}</p></div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].reverse().map((card, index) => (
          <div className='w-full h-fit border p-2 rounded-xl' key={index}><h3>{card.title}</h3><p>{card.description}</p></div>
        ))}
      </div>
    </div>
  );
}
