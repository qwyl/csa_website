import { motion, AnimatePresence } from "framer-motion";
import { TeamMember } from "../../data/team";

type Props = {
  member: TeamMember;
  isOpen: boolean;
  onClose: () => void;
};

export const TeamMemberModal = ({ member, isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[25px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-[25px]"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 right-4 bg-[#AF383C] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {member.term}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#AF383C] mb-2">{member.name}</h2>
                <p className="text-xl text-gray-700 mb-4">{member.position}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {member.major && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Major</h3>
                      <p className="text-gray-700">{member.major}</p>
                    </div>
                  )}
                  {member.year && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Class Year</h3>
                      <p className="text-gray-700">{member.year}</p>
                    </div>
                  )}
                  {member.department && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Department</h3>
                      <p className="text-gray-700">{member.department}</p>
                    </div>
                  )}
                  {member.email && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</h3>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#AF383C] hover:text-[#8f2f33] transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}
                </div>

                {member.bio && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">About</h3>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                )}

                {/* Contact Button */}
                {member.email && (
                  <div className="flex justify-center">
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-[#AF383C] text-white px-8 py-3 rounded-full hover:bg-[#8f2f33] transition duration-300 font-medium inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      Contact {member.name}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 