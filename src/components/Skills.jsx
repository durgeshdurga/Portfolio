

// import { skills } from "../../data";

// export default function Skills() {
//   return (
//     <section id="skills" className="mt-16 h-svh" style={{backgroundColor:"#1F2937"}}>
//       <div className="container  px-5 md:px-10 lg:px-20 xl:px-40  py-10 mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Skills &amp; Technologies
//           </h1>
//           <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
//             I have aquired these skills through Internship and projects.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
//           {skills.map((skill) => (
//             <div key={skill.name} className="relative col-span-1 rounded-lg px-3 py-2  pt-8" data-aos="fade-up" style={{backgroundColor:"#111827"}}>
//               <p className="absolute top-0 text-white">{skill.name}</p>
//               <p className="absolute top-0 text-white" style={{ left: `${skill.level - 10}%` }} >{skill.level}%</p>
//               <div className="w-[100%] bg-neutral-500 rounded-md flex">
//                 <span className={`inline-block bg-green-700 h-[1rem] rounded-md`} style={{ width: `${skill.level}%` }}></span>
//                 <span className={`inline-block flex-1  h-[1rem]`}></span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { skills } from "../../data";

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-16 px-4" style={{ backgroundColor: "#1F2937" }}>
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">Skills &amp; Technologies</h1>
        <p className="text-neutral-400">I have acquired these skills through internships and projects.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-lg p-4 bg-gray-900">
            <p className="text-white">{skill.name}</p>
            <div className="relative w-full bg-neutral-500 h-2 rounded-md mt-2">
              <div className="bg-green-700 h-2 rounded-md" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



