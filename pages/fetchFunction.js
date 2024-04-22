export async function fetchJokesList() {
  try {
    const response = await fetch("http://localhost:3000/list");
    if (!response.ok) {
      throw new Error("Erreur de réseau");
    }
    const data = await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}
