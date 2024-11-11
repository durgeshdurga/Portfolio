import photo from "./editedphoto.jpg";

// const Home = () => {
//   return (
//     <>
//       <div
//         className="flex flex-col items-center  text-white w-full h-screen"
//         style={{ backgroundColor: "#1F2937" }}
//       >
//         <div>
//           <img src={photo} className="w-96 mt-20 rounded-full motion-scale-in-[0.5] motion-translate-x-in-[-111%] motion-translate-y-in-[-65%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier" />
//         </div>
//         <div
//           className="w-1/2 text-center px-8 py-4 mt-4 rounded-2xl"
//           style={{ backgroundColor: "#111827" }}
//         >
//           <h1 className="text-4xl font-bold">Hi, I am <span>Durgesh Kumar Durga</span></h1>
//           <p className="text-2xl mt-1 ">Full Stack Developer</p>
//           <div className="text-xl">
//             I aspire to contribute to a dynamic organization by leveraging my
//             expertise in assessing and integrating new technologies, overseeing
//             technology budgets, and fostering collaboration across diverse teams
//             to innovate and meet business goals. With proficiency in C++, web
//             development, and a focus on exploring MERN development, I bring a
//             versatile skill set aimed at driving technological advancement and
//             achieving sustainable business success.
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <div
      className="flex flex-col items-center text-white w-full h-screen p-4"
      style={{ backgroundColor: "#1F2937" }}
    >
      <div>
        <img
          src={photo}
          className="w-48 md:w-96 mt-20 rounded-full motion-scale-in-[0.5] motion-translate-x-in-[-111%] motion-translate-y-in-[-65%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier"
          alt="profile"
        />
      </div>
      <div className="w-full md:w-1/2 text-center px-4 py-4 mt-4 rounded-2xl bg-gray-900">
        <h1 className="text-3xl md:text-4xl font-bold">
          Hi, I am <span>Durgesh Kumar Durga</span>
        </h1>
        <p className="text-xl md:text-2xl mt-1">Full Stack Developer</p>
        <p className="text-md md:text-xl mt-2 leading-relaxed">
          I aspire to contribute to a dynamic organization by leveraging my
          expertise in assessing and integrating new technologies, overseeing
          technology budgets, and fostering collaboration across diverse teams
          to innovate and meet business goals. With proficiency in C++, web
          development, and a focus on exploring MERN development, I bring a
          versatile skill set aimed at driving technological advancement and
          achieving sustainable business success.
        </p>
      </div>
    </div>
  );
};

export default Home;
