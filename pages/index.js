import BurglarButton from "./BurglarButton";
import JokesResults from "./JokesResults";

export default function Home() {
  return (
    <div className="main w-screen h-screen bg-slate-50 flex flex-col justify-around items-center">
      <BurglarButton></BurglarButton>
      <JokesResults></JokesResults>
    </div>
  );
}
