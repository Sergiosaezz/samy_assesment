import { Loader } from "./components/Loader";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { useImages } from "./hooks/useImages";

function App() {
  const { loading, error, images, loadMore, filterByTitle } = useImages({
    first: 30,
  });

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header handleFilterByTitle={filterByTitle} />
      <main className="px-9 md:px-24 bg-gray-100 pt-9 md:pt-14">
        <CardList
          list={images?.edges ?? []}
          loadMore={loadMore}
          hasMore={!!images?.pageInfo.hasNextPage}
        />
      </main>
    </>
  );
}

export default App;
