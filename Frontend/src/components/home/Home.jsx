// import React from "react";
// import "./Home.css"
// import MultiItemCarousel from "./MultiitemCarousel";

// const Home=()=>{
//     return(
//         <div className="">
            
//             <section className="banner z-0 fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center">
//                 <div className="w-[50vw] z-10 text-center">
//                     <p className="text-2xl lg:text-6xl font-bold z-10 py-5 text-white">
//                         Swaad
//                     </p>
//                     <p className="z-10 text-white text-xl lg:text-4xl">
//                         Taste the Convenience: Food, Fast and Delivered.
//                     </p>
//                 </div>
//             </section>

//             <section className="p-10 lg:py-10 lg:px-20">
//                 <p className="text-2xl font-semibold text-grey-400 py-3 pb-10">Top Meals</p>
//                 <MultiItemCarousel/>
//             </section>




            
            

            
//             <div className="cover absolute top-0 left-0 right-0">

//             </div>
//             <div className="fadout">
                
//             </div>
            

//         </div>
//     )
// }

// export default Home;




// import React from "react";

// const Home = () => {
//     return (
//         <div>
                {/* <section className="banner -z-50 relative flex flex-col justify-center items-center">
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl fon-bold z-10 py-5">
                        Swaad
                    </p>
                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">
                        Taste the Convenience: Food,Fast and Delivered.
                    </p>
                </div>

            </section> */}
            {/* <div className="h-[100vh]"></div>
            <section className="relative z-10">
                <MultiItemCarousel/>
            </section> */}

            {/* <section className="banner z-0 fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
                        Swaad
                    </p>
                    <p className="z-10 text-white-300 text-xl lg:text-4xl">
                        Taste the Convenience: Food, Fast and Delivered.
                    </p>
                </div>
            </section> */}
//             <section className="banner z-0 relative flex flex-col justify-center items-center">
//                 <div className="w-[50vw] z-10 text-center">
//                     <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
//                         Swaad
//                     </p>
//                     <p className="z-10 text-gray-300 text-xl lg:text-4xl">
//                         Taste the Convenience: Food, Fast and Delivered.
//                     </p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;




// import React from "react";
// import "./Home.css";
// import MultiItemCarousel from "./MultiitemCarousel";

// const restaurant=[1,1,1,1,1,1,1,1]
// const Home = () => {
//     return (
//         <div className="relative">
//             {/* Banner Section - Now scrolls with the page */}
//             <section className="banner relative w-full h-screen flex flex-col justify-center items-center">
//                 <div className="w-[50vw] text-center">
//                     <p className="text-2xl lg:text-6xl font-bold py-5 text-white">
//                         Swaad
//                     </p>
//                     <p className="text-white text-xl lg:text-4xl">
//                         Taste the Convenience: Food, Fast and Delivered.
//                     </p>
//                 </div>
//             </section>

//             {/* Carousel Section - Appears below the banner */}
//             <section className="p-10 lg:py-10 lg:px-20 bg-black">
//                 <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
//                     Top Meals
//                 </p>
//                 <MultiItemCarousel />
//             </section>

//             <section className="px-5 lg:px-20">
//                 <h1 className="text-2xl font-semibold text-gray-400 py-3">
//                     Order From Our Handpicked Favorites
//                 </h1>
//                 <div>
//                     {
//                         restaurant.map((item)=><RestaurantCard/>)
//                     }
//                 </div>
//             </section>          
//         </div>
//     );
// };

// export default Home;




import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiitemCarousel";

import RestaurantCard from "../restaurant/RestaurantCard";
const restaurant = [1, 1, 1, 1, 1, 1];

const Home = () => {
    return (
        <div className="pb-10">
            {/* Banner Section */}
            <section className="banner relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center">
                <div className="w-[80%] md:w-[60%] lg:w-[50%] text-center">
                    <p className="text-2xl lg:text-6xl font-bold py-5 text-white">
                        Swaad
                    </p>
                    <p className="text-white text-xl lg:text-4xl">
                        Taste the Convenience: Food, Fast and Delivered.
                    </p>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="p-5 lg:py-10 lg:px-20 bg-black">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
                    Top Meals
                </p>
                <MultiItemCarousel />
            </section>

            {/* Restaurant Section */}
            <section className="px-5 lg:px-20 pt-5">
                <h1 className="text-2xl font-semibold text-gray-400 py-3">
                    Order From Our Handpicked Favorites
                </h1>
                <div className="flex flex-wrap items-center justify-around gap-5">
                    {restaurant.map((item, index) => (
                        <RestaurantCard key={index} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
