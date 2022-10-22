const service = () => {
  return (
    <>
      <div className="">
        <div
          className="text-center text-white bg-cover bg-no-repeat bg-fixed h-screen"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "/images/pexels-pixabay-63324.jpg"
            })`,
          }}
        >
        <div>
          <h1 className="text-4xl font-bold pt-10 uppercase">why choose us?</h1>
          <h1 className="text-2xl ">a brand name that you can trust and realy on</h1>
          <div className="flex justify-evenly mt-20 text-center">
            <div>
               <span className="text-yellow-300 text-6xl bg-white px-4 py-1 rounded-full"><i class="fa fa-globe" aria-hidden="true"></i></span>
               <h1 className="font-bold text-3xl pt-5 uppercase">affordable price guarantee</h1>
               <p className="m-7">lorem ipsum howan gulia daka papa bhio ho ivgvv uyegece eufeyteu euf_eyc etec e tec lorem ipsum howan gulia daka papa bhio ho ivgvv uyegece eufeyteu euf_eyc etec e tec</p>
            </div>
            <div>
               <span className="text-yellow-300 text-6xl bg-white px-4 py-1 rounded-full"><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
               <h1 className="font-bold text-3xl pt-5 uppercase">wide vareity of distinations</h1>
               <p className="m-7">lorem ipsum howan gulia daka papa bhio ho ivgvv uyegece eufeyteu euf_eyc etec e tec lorem ipsum howan gulia daka papa bhio ho ivgvv uyegece eufeyteu euf_eyc etec e tec</p>
            </div>
            <div>
               <span className="text-yellow-300 text-6xl bg-white px-4 py-1 rounded-full"><i class="fa fa-folder" aria-hidden="true"></i></span>
               <h1 className="font-bold text-3xl pt-5 uppercase">very highly qualified service</h1>
               <p className="m-7">lorem ipsum howan gulia daka papa bhio ho ivgvv uyegece eufeyteu euf_eyc etec e tec lorem ipsum howan gulia daka papa bhio ho ivgvv uyegece eufeyteu euf_eyc etec e tec</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default service;