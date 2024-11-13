export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = ['Additional Considerations:
If your cards have more complex structures, you can render them inside each div more elegantly (e.g., passing the card data to a Card component).
This approach ensures that the number of columns is dynamic and doesn't need to be hardcoded; it will work with any number of cards, adjusting based on the index % 3 logic.', 'Card 2', 'Card 3', 'This cyclical layout is automatically handled by the modulus operation, and the cards will be arranged as you desire, looping back to the first column after the third card.', 'Card 5', 'Card 6', 'Card 7', 'Card 8'];


  // Function to organize cards into 3 columns
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className='w-full h-fit border p-2 rounded'key={index}>{card}</div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className='w-full h-fit border p-2 rounded' key={index}>{card}</div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className='w-full h-fit border p-2 rounded' key={index}>{card}</div>
        ))}
      </div>
    </div>
  );
}
