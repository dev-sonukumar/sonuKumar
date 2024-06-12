const TechStack = () => {
  return (
    <div className="w-full border-dashed md:py-20 ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <h3 className="font-bold text-xl mb-10">Tech Stack</h3>
        </div>

        <div className="md:flex justify-between gap-10">
          <div className="frontend-section md:w-1/2 p-10 border-black border border-dashed rounded-xl">
            <h2 className="font-bold text-xl text-center  mb-5 md:mb-10">
              Frontend
            </h2>
            <ul className="flex justify-between flex-wrap">
              <div>
                <li>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </li>
                <li>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </li>
              </div>

              <div>
                <li>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </li>

                <li>
                  <h3>React Js</h3>
                  <p>intermediate</p>
                </li>
              </div>

              <div>
                <li>
                  <h3>Tailwind</h3>
                  <p>Experienced</p>
                </li>
                <li>
                  <h3>BootStrap</h3>
                  <p>intermediate</p>
                </li>
              </div>
            </ul>
          </div>

          {/* ----- Backend ---- */}

          <div className="mt-5 md:mt-0 backend-section md:w-1/2 p-10 border-black border border-dashed rounded-xl">
            <h2 className="font-bold text-xl text-center  mb-5 md:mb-10">
              Backend
            </h2>
            <ul className="flex justify-between flex-wrap">
              <div>
                <li>
                  <h3>Node JS</h3>
                  <p>intermediate</p>
                </li>
                <li>
                  <h3>Express js</h3>
                  <p>intermediate</p>
                </li>
              </div>

              <div>
                <li>
                  <h3>Git</h3>
                  <p>intermediate</p>
                </li>

                <li>
                  <h3>Mogo DB</h3>
                  <p>intermediate</p>
                </li>
              </div>

              <div>
                <li>
                  <h3>SQL</h3>
                  <p></p>
                </li>
                <li>
                  <h3>Tailwind</h3>
                  <p>Experienced</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
