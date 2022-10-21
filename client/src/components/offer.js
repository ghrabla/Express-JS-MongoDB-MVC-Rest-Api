const offer = () => {
    return(
        <div>
          <div>
          <h1 className="uppercase text-4xl text-center font-bold pt-12">our offers</h1>
          <h1 className="text-2xl text-center">get or check our our trip and tour offers</h1>
          </div>
          <div className="flex justify-center gap-8 mt-8">
          <div>
              <img src={`${process.env.PUBLIC_URL}/images/pexels-abdo-bahani-14009980.png`} className="rounded-t"/>
              <div className="flex justify-between p-4 bg-gray-200 ">
                  <p className="font-bold">Tanger</p>
                  <p>200 DH</p>
              </div>
          </div>
          <div>
              <img src={`${process.env.PUBLIC_URL}/images/pexels-andre-manuel-8571079.png`} className="rounded-t"/>
              <div className="flex justify-between p-4 bg-gray-200">
                  <p className="font-bold">Fez</p>
                  <p>150 DH</p>
              </div>
          </div>
          <div>
              <img src={`${process.env.PUBLIC_URL}/images/pexels-gabriel-garcia-2404046.png`} className="rounded-t"/>
              <div className="flex justify-between p-4 bg-gray-200">
                  <p className="font-bold">Casablanca</p>
                  <p>100 DH</p>
              </div>
          </div>
          </div>
          <div className="flex justify-center gap-8 mt-8 mb-10">
          <div>
              <img src={`${process.env.PUBLIC_URL}/images/pexels-humphrey-muleba-3525905.png`} className="rounded-t"/>
              <div className="flex justify-between p-4 bg-gray-200 ">
                  <p className="font-bold">Tanger</p>
                  <p>200 DH</p>
              </div>
          </div>
          <div>
              <img src={`${process.env.PUBLIC_URL}/images/pexels-idriss-meliani-2945595.png`} className="rounded-t"/>
              <div className="flex justify-between p-4 bg-gray-200">
                  <p className="font-bold">Fez</p>
                  <p>150 DH</p>
              </div>
          </div>
          <div>
              <img src={`${process.env.PUBLIC_URL}/images/pexels-taryn-elliott-4502965.png`} className="rounded-t"/>
              <div className="flex justify-between p-4 bg-gray-200">
                  <p className="font-bold">Casablanca</p>
                  <p>100 DH</p>
              </div>
          </div>
          </div>
        </div>
    )
}

export default offer;