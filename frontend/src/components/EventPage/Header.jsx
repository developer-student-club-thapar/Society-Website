import React from "react";

const eventCategories = [
  "Hackathons ",
  "Speaker Interactions ",
  "Watch Parties ",
  "Workshops ",
];

function EventsAndGallery() {
  return (
    <main className="flex flex-col items-center mt-14 font-bold leading-none text-black">
      <nav className="flex flex-wrap gap-4 justify-center items-center text-xl text-center text-black text-opacity-60 max-md:max-w-full">
        {eventCategories.map((category, index) => (
          <EventCategory key={index} category={category} />
        ))}
      </nav>
      <h1 className="mt-4 text-8xl max-md:max-w-full max-md:text-4xl">
        Events and Gallery
      </h1>
      <SubscribeButton />
    </main>
  );
}

function EventCategory({ category }) {
  return <div className="self-stretch my-auto">{category}</div>;
}

function SubscribeButton() {
  return (
    <form className="flex overflow-hidden gap-5 w-fit justify-center items-center py-4 pr-10 pl-10 mt-4 text-base uppercase rounded-full border-2 border-black border-solid max-md:px-5">
      <label htmlFor="subscribeInput" className="sr-only">
        Subscribe for future events
      </label>
      <p className=" text-nowrap self-stretch my-auto bg-transparent border-none outline-none w-[250px] font-bold text-black">
        SUBSCRIBE FOR FUTURE EVENTS
      </p>
      <button type="submit" aria-label="Submit subscription" className="w-fit">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf5aa2ac1635fa3f786a568c3aea5ae8ab2c8f7061b24f58f01153734f85554?placeholderIfAbsent=true&apiKey=1e94dac72461470eb67aa910a2fb5ecf"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
          alt=""
        />
      </button>
    </form>
  );
}

export default EventsAndGallery;
