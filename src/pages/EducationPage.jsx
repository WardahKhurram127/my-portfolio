import React from 'react'

const EducationPage = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Information Technology University",
      year: "2023–2027",
    },
    {
      degree: "Intermediate (F.Sc Pre-Engineering)",
      institution: "Punjab College Lahore",
      year: "2021–2023",
    },
    {
      degree: "Matriculation (Science)",
      institution: "Connoisseur Grammar School",
      year: "2019–2021",
    },
  ];

 
  
  return (
    <div className="h-[100vh] w-[100%] bg-gray-900 text-white py-12 px-4 md:px-12 2xl:ml-32 p-20  min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold hover:text-[#FF4D4D] text-center mb-2">EDUCATION</h2>
      <hr className="border-red-500 w-36 mx-auto mb-8" />

      <div className="overflow-x-auto max-w-[250px] sm:max-w-[510px] md:max-w-[900px] lg:max-w-[990px]">
        <table className=" w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-gray-800 text-red-400 text-lg">
              <th className="py-4 rounded-l-xl">Degree</th>
              <th className="py-4">Institution</th>
              <th className="py-4 rounded-r-xl">Year</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition duration-200 shadow-lg rounded-xl"
              >
                <td className="py-4 px-6 font-medium text-center">{edu.degree}</td>
                <td className="py-4 px-6 text-center">{edu.institution}</td>
                <td className="py-4 px-6 font-semibold text-center text-red-300">{edu.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default EducationPage
