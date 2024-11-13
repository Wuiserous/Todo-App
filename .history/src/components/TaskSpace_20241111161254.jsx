export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = ['how can i write the logic so that the first card that comes should go to the first div second card that comes should go to the second div third card that comes should go to the third div and again cycle continues as the 4rth card should go to the first div 5th to the second and 6th to the 3rd, as here i will later use the map function to fetch the cards from the db and this is how i want to arrange them', 'The world is a vast and dynamic place full of untapped potential and hidden wonders. Every day, people wake up with dreams, ambitions, and hopes for the future. Yet, the path to success is never linear. It requires resilience, determination, and the ability to adapt to an ever-changing environment. Some days are filled with triumphs, while others come with setbacks and challenges. But it is through these obstacles that we often discover our true strength. The key to moving forward lies in perseverance and the willingness to learn from each experience. Success is not just about achieving goals but also about growing as an individual along the way. Each failure teaches a lesson, and every victory is a reminder of the hard work put in. Ultimately, it is the journey that shapes us, not just the destination.', 'Card 3', 'This cyclical layout is automatically handled by the modulus operation, and the cards will be arranged as you desire, looping back to the first column after the third card.', 'Card 5', 'Card 6', 'Card 7', 'Card 8'];


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
