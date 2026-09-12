import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import type { ITechnology } from "./type/Type";
import TechnologyGrid from "./components/technology/TechnologyGrid";

const techFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/datafile.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading..........</h2>}>
        <TechnologyGrid techPromise={techPromise}></TechnologyGrid>
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
