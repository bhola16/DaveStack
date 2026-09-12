import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TechnologyGrid from "./components/technology/TechnologyGrid";
import type { ITechnology } from "./type/Type";

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
      <Suspense fallback={<h2 className="container mx-auto ">Loading..........</h2>}>
        <TechnologyGrid techPromise={techPromise}></TechnologyGrid>
      </Suspense>
      <ToastContainer />

      <Footer></Footer>
    </div>
  );
}

export default App;
