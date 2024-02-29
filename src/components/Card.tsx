import CardBG from "../assets/bg-pattern-card.svg";
import Avatar from "../assets/image-victor.jpg";

const Card = () => {
  return (
    <div className="relative bg-[#fff] rounded-2xl ">
      <div>
        <img src={CardBG} alt="card-bg" className="rounded-t-2xl w-80" />
      </div>
      <div className=" absolute inset-0 flex justify-center items-center bottom-24">
        <img
          src={Avatar}
          alt="Avatar"
          className="rounded-full h-24 bg-[#fff] p-1"
        />
      </div>
      <div>
        <div className="text-center mt-16">
          <h2 className="text-lg text-VeryDarkDesaturatedBlue font-bold">
            Victor Crest{" "}
            <span className="font-normal text-DarkGrayishBlue">26</span>
          </h2>
          <p className="font-normal text-DarkGrayishBlue text-sm">London</p>
        </div>
        <hr className="text-DarkGray my-[1.4rem]" />
        <div className="flex text-center justify-evenly mb-6">
          <div>
            <p className="text-lg text-VeryDarkDesaturatedBlue font-bold">
              80K
            </p>
            <p className="font-normal text-DarkGrayishBlue text-sm">
              Followers
            </p>
          </div>
          <div>
            <p className="text-lg text-VeryDarkDesaturatedBlue font-bold">
              803K
            </p>
            <p className="font-normal text-DarkGrayishBlue text-sm">Likes</p>
          </div>
          <div>
            <p className="text-lg text-VeryDarkDesaturatedBlue font-bold">
              1.4K
            </p>
            <p className="font-normal text-DarkGrayishBlue text-sm">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
