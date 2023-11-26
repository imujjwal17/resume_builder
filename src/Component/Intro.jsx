import ThumbsUp from "../assets/thumbs-up.png";
import Guide from "../assets/tour-guide.png";
import Hiring from "../assets/hiring.png";

const Intro = () => {
  return (
    <>
    <div className="flex flex-row bg-gradient-to-r from-white to-blue-400 min-h-screen w-full item-center">
    <div className="flex flex-col w-4/5 ">
      <div className="flex text-black h-40 border shadow-sm rounded-md border-r-slate-700 mt-20 bg-white ml-40 p-4 items-center w-fit">
        <img src={ThumbsUp} alt="" className="w-[60px] h-[60px] p-2"/>
        <div className="flex flex-col ml-3">
          <span className="font-bold text-xl">Easy Online Resume Builder</span>
          <span className="mt-2 w-auto">
            Lorem ipsum dolor sit amet, consectetur&nbsp;adipisicing elit.
            Laudantium modi assumenda.
          </span>
        </div>
      </div>
      <div className="flex text-black h-40 border shadow-sm rounded-md border-r-slate-700 mt-20 bg-white ml-40 p-4 items-center w-fit">
        <img src={Guide} alt="" className="w-[60px] h-[60px] p-2"/>
        <div className="flex flex-col ml-3">
          <span className="font-bold text-xl">Step By Step Expert Tips</span>
          <span className="mt-2 w-auto">
            Lorem ipsum dolor sit amet, consectetur&nbsp;adipisicing elit.
            Laudantium modi assumenda.
          </span>
        </div>
      </div>
      <div className="flex text-black h-40 border shadow-sm rounded-md border-r-slate-700 mt-20 bg-white ml-40 p-4 items-center w-fit">
        <img src={Hiring} alt="" className="w-[60px] h-[60px] p-2"/>
        <div className="flex flex-col ml-3">
          <span className="font-bold text-xl">Recruiter Approved Phrases</span>
          <span className="mt-2 w-auto">
            Lorem ipsum dolor sit amet, consectetur&nbsp;adipisicing elit.
            Laudantium modi assumenda.
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-fit ml-48 mt-48 mr-20">
        <div className="flex space-x-3">
            <span className="bg-blue-500 rounded-full w-4 h-4"></span>
            <span className="bg-violet-500 rounded-full w-4 h-4"></span>
            <span className="bg-yellow-500 rounded-full w-4 h-4" ></span>
            <span className="bg-red-500 rounded-full w-4 h-4"></span>
            <span className="bg-green-500 rounded-full w-4 h-4"></span>
            <span className="bg-orange-500 rounded-full w-4 h-4"></span>
        </div>
        <span className="text-4xl mt-8 font-bold">Why Choose Our Platform?</span>
        <p className="mt-2 text-2xl text-gray-600 font-palanquin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
        <p className="mt-2 text-2xl text-gray-600 font-palanquin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
    </div>
    </div>
    </>
  );
};

export default Intro;
