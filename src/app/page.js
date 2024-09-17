import Header from "@/components/Header";
import ResultCard from "@/components/ResultCard";
import Searchbar from "@/components/Searchbar";
export default function Home() {
  return (
    <div className="flex flex-col max-w-3xl m-auto px-4 py-4">
      <Header />
      <div>
        <Searchbar />
      </div>
      <ResultCard />
    </div>
  );
}
