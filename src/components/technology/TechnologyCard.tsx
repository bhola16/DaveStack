import { type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../../type/Type";

interface ITechnologyCardProps {
  tech: ITechnology;
  selectedTechs: ITechnology[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  tech,
  selectedTechs,
  setSelectedTechs,
}: ITechnologyCardProps) => {
  const isSelected = selectedTechs.some(
    (selectedTech) => selectedTech.id === tech.id,
  );

  const handleSelectTechs = () => {
    

    setSelectedTechs([...selectedTechs, tech]);

  };

  return (
    <div className="h-full rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 lg:p-6">
      {/* Icon + Badge */}
      <div className="flex items-center justify-between gap-3">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        />

        <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-medium text-orange-600 sm:px-3 sm:text-sm">
          {tech.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h2 className="mt-4 text-xl font-bold text-gray-800 sm:mt-5 sm:text-2xl">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-gray-600">{tech.description}</p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 sm:mt-5">
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 sm:px-3 sm:text-sm">
          {tech.category}
        </span>

        <span className="text-xs font-medium text-gray-500 sm:text-sm">
          {tech.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span className="font-semibold">{tech.rating}</span>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={handleSelectTechs}
        className={`mt-5 w-full rounded-full py-2.5 text-sm font-bold text-white transition sm:text-base ${
          isSelected
            ? "cursor-pointer bg-gray-400"
            : "bg-black hover:opacity-90"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
