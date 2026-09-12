import { use, useState } from "react";
import type { ITechnology } from "../../type/Type";
import AvailavleTechs from "./AvailavleTechs";
import YourStack from "./YourStack";

interface TechnologyGridProps {
  techPromise: Promise<ITechnology[]>;
}

const TechnologyGrid = ({ techPromise }: TechnologyGridProps) => {
  const techGrids = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<ITechnology[]>([]);

  return (
    <div className="container mx-auto mb-10 max-w-full px-4 py-8 sm:px-6 md:px-8 lg:px-20">
      {/* Heading */}
      <div>
        <h1 className="my-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-600 via-pink-600 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-base text-gray-600 sm:text-lg lg:text-xl">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      {/* Main Part */}
      <div className="mt-6 grid grid-cols-1 gap-8 py-5 lg:mt-8 lg:grid-cols-12">
        {/* Available Technologies */}
        <div className="lg:col-span-9">
          <AvailavleTechs
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
            techGrids={techGrids}
          />
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-3">
          <YourStack
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;