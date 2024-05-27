import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

export const Cardscontent = () => {
  let location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-2">
          <h1 className="text-xl font-bold">My Food App</h1>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            <Link to="/">Back to menu</Link>
          </button>
        </header>
        <main className="flex-grow overflow-y-auto px-4 py-4">
          <div className="flex flex-col md:items-center md:space-x-4">
            <div className="w-full md:w-1/2 h-56 md:h-96 mb-6 md:mb-0 md:mr-8 border-2 rounded-lg overflow-hidden">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=iWT0kl1k32M&ab_channel=JoshuaWeissman"
              />
            </div>
            <div className="w-full md:w-3/4 mt-4 md:mt-0 border-2 rounded-2xl border-cyan-400 p-2">
              <div className="bg-gray-100 p-4 shadow-md">
                <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 hover:text-white text-2xl">
                  {location.state.title}
                </h2>
                <div className="text-gray-700 m-2 text-start min-h-60 max-h-96 flex md:flex-row flex-col-reverse md:items-center">
                  <p className="md:w-1/2 border-2 border-blue-400 rounded-2xl hide-scrollbar mt-4 p-4 mr-2 overflow-y-auto min-h-40 md:min-h-72 max-h-80">
                    {location.state.mealDetail}
                    at FlowParserMixin.parseExprOps
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:10427:23)
                    at FlowParserMixin.parseMaybeConditional
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:10404:23)
                    at FlowParserMixin.parseMaybeAssign
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:10365:21)
                    at FlowParserMixin.parseMaybeAssign
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:5696:18)
                    at FlowParserMixin.parseExpressionBase
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:10319:23)
                    at
                    C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:10315:39
                    at FlowParserMixin.allowInAnd
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:11952:16)
                    at FlowParserMixin.parseExpression
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:10315:17)
                    at FlowParserMixin.parseReturnStatement
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:12640:28)
                    at FlowParserMixin.parseStatementContent
                    (C:\Users\vedantpc\Desktop\ReatcFoodApp\my-app\node_modules\@babel\parser\lib\index.js:12291:21)
                    Compiled successfully! Compiled successfully! Compiled
                    successfully! Compiled successfully! You can now view my-app
                    in the browser. Local: http://localhost:3000 On Your
                    Network: http://192.168.40.230:3000 Note that the
                    development build is not optimized. To create a production
                    build, use npm run build.
                  </p>
                  <img
                    className="rounded-xl h-40 w-60 md:h-72 md:w-2/5 ml-auto mr-auto mt-4 object-cover"
                    src={location.state.imageId}
                    alt={location.state.title}
                  />
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
                      Type :
                    </p>
                    <p className="text-lg">{location.state.type}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
                    Ingredients
                  </h3>
                  <p className="text-gray-700">
                    {location.state?.ingredients.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
