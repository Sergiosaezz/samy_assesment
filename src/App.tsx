import { Loader } from "./components/Loader";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { useImages } from "./hooks/useImages/useImages";
import { debounce } from "./utils";

function App() {
  const { loading, error, images, loadMore, filterByTitle, likeImage } =
    useImages({
      first: 30,
    });

  const debouncedFilterByTitle = debounce(filterByTitle, 500);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header handleFilterByTitle={debouncedFilterByTitle} />
      <main className="px-9 lg:px-24 bg-gray-100 pt-9 lg:pt-14">
        {loading ? (
          <Loader />
        ) : (
          <CardList
            list={images?.edges ?? []}
            loadMore={loadMore}
            hasMore={!!images?.pageInfo.hasNextPage}
            handleLike={likeImage}
          />
        )}
      </main>
    </>
  );
}

export default App;
