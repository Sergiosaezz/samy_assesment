import { gql, useQuery } from "@apollo/client";
import { GetImagesResult, GetImagesVariables } from "./interfaces";
import { Loader } from "./components/Loader";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";

const GET_IMAGES = gql`
  query GetImages($title: String, $first: Int, $after: String) {
    images(title: $title, first: $first, after: $after) {
      edges {
        node {
          id
          title
          picture
          liked
          likesCount
          price
          author
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

function App() {
  const { loading, error, data, fetchMore } = useQuery<
    GetImagesResult,
    GetImagesVariables
  >(GET_IMAGES, { variables: { first: 30 } });

  if (loading) return <Loader></Loader>;
  if (error) return <p>Error: {error.message}</p>;

  const loadMore = () => {
    if (data?.images.pageInfo.hasNextPage) {
      fetchMore({
        variables: { after: data.images.pageInfo.endCursor },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;

          return {
            images: {
              edges: [
                ...previousResult.images.edges,
                ...fetchMoreResult.images.edges,
              ],
              pageInfo: fetchMoreResult.images.pageInfo,
            },
          };
        },
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <CardList list={data?.images.edges} />
        {data?.images.pageInfo.hasNextPage && (
          <button className="p-2" type="button" onClick={loadMore}>
            Load More
          </button>
        )}
      </main>
    </>
  );
}

export default App;
