export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8'];


  // Function to organize cards into 3 columns
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-4 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`}>
      <div className="h-full p-2 flex flex-col gap-2 col-span-1 border">
        {columns[0].map((card, index) => (
          <div className='w-full h-fit border p-2 rounded'key={index}>{card}</div>
        ))}
      </div>
      <div className="h-full col-span-1 border">
        {columns[1].map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
      <div className="h-full col-span-1 border">
        {columns[2].map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
    </div>
  );
}
