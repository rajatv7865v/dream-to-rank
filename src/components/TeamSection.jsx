const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Expert Team',
      role: 'UPSC Specialists',
      description: 'Our team consists of experienced educators and UPSC experts dedicated to your success.',
      avatar: '👨‍🏫'
    },
    {
      name: 'AI Engineers',
      role: 'Technology Experts',
      description: 'Built by experts in AI and education technology to provide the best learning experience.',
      avatar: '💻'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built by Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team is on a mission to democratize UPSC learning through AI by providing 
            customizable and interactive learning solutions to students across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                </div>
                
                {/* Name and Role */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Your Success is Our Mission
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing you with the best tools and resources to crack the UPSC exam. 
            Every feature is designed with your success in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

