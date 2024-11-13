export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const { cards, bgColor } = props;

  // Function to organize cards into 3 columns
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-4 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${bgColor} border-gray-500`}>
      <div className="h-full col-span-1 border">
        {columns[0].map((card, index) => (
          <div key={index}>{card}</div>
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
