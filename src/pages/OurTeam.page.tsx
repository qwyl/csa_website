import { motion } from "framer-motion";
import { useState } from "react";
import { teamMembers, departments } from "../data/team";
import { TeamMemberCard } from "../components/team/TeamMemberCard";
import { TeamMemberModal } from "../components/team/TeamMemberModal";
import { TeamMember } from "../data/team";

const star = "/assets/images/misc/star.jpg";
const softstar = "/assets/images/misc/softstar.jpg";

function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter active members and group by department
  const activeMembers = teamMembers.filter(member => member.isActive);
  
  const membersByDepartment = departments.map(dept => ({
    ...dept,
    members: activeMembers
      .filter(member => member.department === dept.name)
      .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0))
  }));

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="mt-40 mx-36 pb-20 flex flex-col justify-center">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="mb-6 font-normal italic text-[#AF383C] text-[60px] leading-none custom-text-shadow custom-text-stroke">
          OUR TEAM
        </h1>
        <div className="flex justify-center items-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 55 55" fill="none">
            <path d="M26.7661 0.651919C26.8694 -0.217306 28.1307 -0.217306 28.2339 0.651919L29.0991 7.94393C30.2163 17.3599 37.6401 24.7837 47.056 25.9009L54.348 26.7661C55.2173 26.8694 55.2173 28.1307 54.348 28.2339L47.056 29.0991C37.6401 30.2163 30.2163 37.6401 29.0991 47.056L28.2339 54.348C28.1307 55.2173 26.8694 55.2173 26.7661 54.348L25.9009 47.056C24.7837 37.6401 17.3599 30.2163 7.94393 29.0991L0.651919 28.2339C-0.217306 28.1307 -0.217306 26.8694 0.651919 26.7661L7.94393 25.9009C17.3599 24.7837 24.7837 17.3599 25.9009 7.94393L26.7661 0.651919Z" fill="#180604" />
          </svg>
          <span className="ml-4 text-xl max-w-2xl">
            Meet the dedicated team behind CSA! Our passionate members work together to create an inclusive community and celebrate Chinese culture at UC Berkeley.
          </span>
        </div>
      </div>

      {/* Department Sections */}
      <div className="space-y-16">
        {membersByDepartment.map((department, deptIndex) => (
          <motion.div
            key={department.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
            className="p-4"
          >
            {/* Department Header */}
            <div className="text-center mb-8">
              <h1 className="font-normal text-[#AF383C] text-[32px] text-shadow-keepup mb-4">{department.name}</h1>
            </div>

            {/* Team Members Grid */}
            {department.members.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {department.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                  >
                    <TeamMemberCard 
                      member={member} 
                      onClick={() => handleMemberClick(member)}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No active members in this department currently.</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 text-center bg-white rounded-[25px] p-8 shadow-lg"
      >
        <h2 className="text-[#AF383C] text-[32px] font-medium mb-6">Interested in Joining Our Team?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We're always looking for passionate individuals to join our team! Whether you're interested in leadership, media, events, or any other area, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/joinus"
            className="bg-[#AF383C] text-white px-8 py-4 rounded-[25px] hover:bg-[#A12D30] transition duration-300 font-medium"
          >
            Apply Now
          </a>
          <a
            href="mailto:ucbcsa@berkeley.edu"
            className="border-2 border-[#AF383C] text-[#AF383C] px-8 py-4 rounded-[25px] hover:bg-[#AF383C] hover:text-white transition duration-300 font-medium"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* Decorative Elements */}
      <img src={star} alt="star" className="absolute right-[10%] top-[25%] w-32 sm:w-24 md:w-28 rotate-12 opacity-70"/>
      <img src={softstar} alt="softstar" className="absolute left-[5%] top-[35%] size-20 opacity-60"/>
      <img src={star} alt="star" className="absolute right-[8%] bottom-[20%] w-24 rotate-45 opacity-60"/>
    </div>
  );
}

export default OurTeam;