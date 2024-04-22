import JokesResults from "./JokesResults";

function BurglarButton({ fetchJokesList }) {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/getjoke", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Erreur de réseau");
      }
      await response.json();
      fetchJokesList();
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  return (
    <div className="button relative top-28">
      <img
        src="/burglar.png"
        alt="burglar"
        className="absolute -translate-x-1/2 -translate-y-[45%] left-1/2 -top-full z-50"
      />
      <div
        className="clickMe flex justify-center items-center z-0"
        onClick={() => fetchData()}
      >
        <p className="p-5 bg-[#35505D] border-4 border-black text-white font-jomhuria text-4xl hover:cursor-pointer">
          Voler une blague
        </p>
      </div>
    </div>
  );
}

export default BurglarButton;
