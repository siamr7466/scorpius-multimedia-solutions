const Team = () => {
    const teamMembers = [
      {
        name: "Syeem Shahriar",
        role: "Founder",
        img: "./Images/syeem.jpg",
      },
    //   {
    //     name: "Yamid",
    //     role: "Senior Editor",
    //     img: "https://pagedone.io/asset/uploads/1696238396.png",
    //   },
      {
        name: "M P Shahriar",
        role: "CEO & Founder {IUBian}",
        img: "./Images/mp.jpg",
      },
      {
        name: "Sanjid Hassan",
        role: "Senior Editor",
        img: "https://pagedone.io/asset/uploads/1696238446.png",
      },
      {
        name: "Mashfika Yasmin",
        role: "Agent",
        img: "./Images/mashfi.jpg",
      },
    ];
  
    return (
      <div className="max-w-7xl  mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-sans  text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-15 text-gray-900">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {teamMembers.map((member, index) => (
              <div key={index} className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  {member.name}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  