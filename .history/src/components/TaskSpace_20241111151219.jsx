export default function TaskSpace(props) {
    return (
      <div className={`rounded-xl flex p-2 gap-4 flex-wrap hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`}>
        <div className="min-w-[200px] border rounded-lg h-fit flex flex-col gap-2 p-2">
          <div className="flex flex-col items-center justify-start w-full text-4xl">
            <strong>Title</strong>
            <div className="relative w-full border rounded h-2"><div className="absolute bg-blue-500 h-full rounded w-[100px]"></div></div>
            </div>
          <div className="text-left h-[150px] w-fit overflow-auto hide-scrollbar"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur id molestiae ab nulla accusamus natus voluptatum repellendus! Nam asperiores corporis eum id eaque corrupti numquam ex dolorem architecto voluptates!
          Nemo harum excepturi molestias veniam facere vero nobis explicabo. A exercitationem aperiam fugiat, dolor, quos totam mollitia beatae aut repudiandae possimus consequatur ea laboriosam doloribus hic? Ullam ut dignissimos tenetur.
          Sit, aliquam maxime! Magnam hic odio amet sunt qui esse corporis optio. Quis minima maiores porro quod totam, animi non iure laborum sint necessitatibus. Error similique molestiae esse provident explicabo?
          Eos sequi dolorem non expedita ipsum, ut consequatur, voluptates quod a atque aspernatur, dolorum dicta. Pariatur, architecto debitis eveniet animi quo at facilis nam libero natus labore magnam sit molestias.
          Dolorem fugit unde ea aut quo aliquid excepturi blanditiis facere inventore ad earum ipsam reiciendis impedit delectus minus nemo ex quis, doloremque harum soluta dolores architecto. Distinctio similique consequuntur amet.
          Dolor ipsum officia ex, ullam eum odit dolore at quas velit. Ipsam consequuntur accusantium ex, alias molestias nulla nostrum est? Quisquam aspernatur temporibus beatae earum labore pariatur excepturi laudantium corporis.
          Ipsa debitis repudiandae dolores sit? Recusandae dolorem itaque doloremque deserunt ullam, neque sequi iure magni voluptate sed, dicta, sit possimus architecto autem? Repellat corporis beatae culpa, nesciunt tempore repudiandae inventore!
          Illum dignissimos maiores quidem reiciendis fuga aperiam eos mollitia nulla optio, veniam minima, autem pariatur saepe consequuntur. Architecto sit quod nobis itaque excepturi, enim ab voluptatem ea dolore aut accusamus.
          Quod odio at officiis odit est neque possimus tempora! Neque illo provident dolor, at ab repellat assumenda repellendus distinctio repudiandae eius ullam officiis qui harum, quis a atque asperiores sint.
          Natus exercitationem repellat commodi! Ad praesentium eaque labore quam, ipsam molestiae assumenda veniam consequuntur doloremque dolorum neque, obcaecati incidunt eveniet id quaerat voluptates voluptatem quia. Officia unde soluta vel impedit.</p></div>
        </div>
      </div>
    )
}