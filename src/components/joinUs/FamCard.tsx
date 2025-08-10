import { motion } from "framer-motion";
import { Fam } from "../../data/fams";

type Props = {
  fam: Fam;
};

export const FamCard = ({ fam }: Props) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="w-[350px] h-[450px] rounded-[20px] bg-white shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
  >
    <div className="relative">
      <img
        src={fam.image}
        alt={fam.title}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#AF383C] mb-2">{fam.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{fam.description}</p>
      <div className="flex items-center justify-center">
        <div>
          <p className="text-xs text-gray-500 mb-1">Family Heads:</p>
          <p className="text-sm font-medium">{fam.famHeads.join(" & ")}</p>
        </div>
      </div>
    </div>
  </motion.div>
);