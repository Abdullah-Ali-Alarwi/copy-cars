import Left from "./Left";

export default function Subscribe() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-around  bg-[#f4f4f4] p-10">

      <Left />


      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <p className="font-semibold text-2xl mb-10">
          Sign up for Price Drops, New <br />
          Listings, & More
        </p>

        <div className="flex w-full">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-white rounded-l-md p-4 focus:outline-none w-full"
          />
          <button className="bg-[#07819d] text-white rounded-r-md p-4 hover:bg-[#1095b3]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
