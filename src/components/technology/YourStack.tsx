import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../type/Type";
// import YourStackCard from "./YourStackCard";

interface YourStackProps {
  selectedTechs: ITechnology[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({ selectedTechs, setSelectedTechs }: YourStackProps) => {
  return (
  <div>
    <h2>Hello your stack </h2>
  </div>
  );
};

export default YourStack;
