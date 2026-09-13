import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../type/Type";
import YourStackCard from "./YourStackCard";

interface YourStackProps {
  selectedTechs: ITechnology[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({ selectedTechs, setSelectedTechs }: YourStackProps) => {
  return (
    <div className="rounded-2xl h-auto bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div>
        <h2 className="text-3xl font-bold">Your Stack</h2>

        <p className="mt-1 text-lg text-gray-500">
          {selectedTechs.length === 0
            ? "No Technology Selected Yet."
            : `${selectedTechs.length} ${
                selectedTechs.length === 1 ? "Technology" : "Technologies"
              } Selected`}
        </p>
      </div>

      <YourStackCard
        selectedTechs={selectedTechs}
        setSelectedTechs={setSelectedTechs}
      ></YourStackCard>
    </div>
  );
};

export default YourStack;
