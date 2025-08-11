import { motion } from "framer-motion";
import { TeamMember } from "../../data/team";

type Props = {
  member: TeamMember;
  onClick: () => void;
};

export const TeamMemberCard = ({ member, onClick }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    onClick={onClick}
    className="w-[280px] bg-white rounded-[20px] shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
  >
    <div className="relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#AF383C] mb-1">{member.name}</h3>
      <p className="text-lg font-medium text-gray-700 mb-2">{member.position}</p>
      {member.year && (
        <p className="text-sm text-gray-500 mb-3">{member.year}</p>
      )}
    </div>
  </motion.div>
); 