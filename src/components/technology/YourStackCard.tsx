import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";
import type { ITechnology } from "../../type/Type";

interface YourStackCardProps {
  selectedTechs: ITechnology[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStackCard = ({
  selectedTechs,
  setSelectedTechs,
}: YourStackCardProps) => {
  const handleRemove = (id: number, name: string) => {
    setSelectedTechs((prev) => prev.filter((tech) => tech.id !== id));

 
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div>
      {selectedTechs.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-gray-300 py-10 text-center">
          <h2 className="text-lg font-semibold text-gray-600">
            Your Stack is empty.
          </h2>
        </div>
      ) : (
        <div className="mt-5">
          <div className="space-y-3">
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center  justify-between rounded-xl border p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold">{tech.name}</h3>
                    <p className="text-sm text-gray-500">{tech.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(tech.id, tech.name)}
                  className="text-xl font-bold text-gray-600 hover:text-red-700"
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-full bg-red-500 py-2.5 font-bold text-white hover:bg-red-600"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStackCard;
