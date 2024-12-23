import { Loader } from "./components/Loader";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { useImages } from "./hooks/useImages";

function App() {
  const { loading, error, images, loadMore } = useImages({ first: 30 });

  if (loading) return <Loader></Loader>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <main>
        <CardList list={images?.edges} />
        {images?.pageInfo.hasNextPage && (
          <button className="p-2" type="button" onClick={loadMore}>
            Load More
          </button>
        )}
      </main>
    </>
  );
}

export default App;
