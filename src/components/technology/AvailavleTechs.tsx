import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../type/Type";

interface AvailableTechnologyProps {
  techGrids: ITechnology[];
  selectedTechs: ITechnology[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailavleTechs = ({
  techGrids,
  selectedTechs,
  setSelectedTechs,
}: AvailableTechnologyProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {techGrids.map((tech: ITechnology) => (
          <TechnologyCard
            key={tech.id}
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
            tech={tech}
          ></TechnologyCard>
        ))}
      </div>
    </div>
  );
};

export default AvailavleTechs;