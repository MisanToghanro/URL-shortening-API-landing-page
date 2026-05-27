
const Cards = () => {

    const cards = [
        {logo:"assets/images/icon-brand-recognition.svg",
             alt: "Brand logo description",
            title:"Brand Recognition",
            text:`Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`

        },
        {logo:"assets/images/icon-detailed-records.svg",
            title:"Detailed Records",
            alt: "Detailed Records",
            text:`Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`

        },
        {logo:"assets/images/icon-fully-customizable.svg",
            alt: "Fully Customizable",
            title:"Fully Customizable",
            text:`Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`

        }
    ]
    return(
        <div className="flex flex-col md:flex-row gap-20 md:gap-8 relative">
            
            <div className="bg-cyan absolute  h-full w-2  left-1/2 top-0 -translate-x-1/2 md:h-2 md:w-full md:left-0  md:top-1/2 md:translate-y-1/2  md:translate-x-0"></div>
            
            {cards.map((card, index) => (
                <div key={index} className="bg-white p-8 rounded-lg text-center md:text-left relative">
                    <div className="bg-purple rounded-full p-4 items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:left-0  h-20 w-20 flex">
                    <img src={card.logo} alt={card.alt} />
                    </div>
                    
                    <h3 className="mb-4 mt-10 font-bold text-xl text-gray-950">{card.title}</h3>
                    <p className="text-sm md:text-md text-gray-500">{card.text}</p>
                </div>
            ))}

        </div>
    )
}
export default Cards