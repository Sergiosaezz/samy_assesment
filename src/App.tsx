import { gql, useQuery } from "@apollo/client";

const GET_IMAGES = gql`
  query GetImages($title: String, $first: Int, $after: String) {
    images(title: $title, first: $first, after: $after) {
      edges {
        node {
          id
          title
          picture
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
  const { loading, error, data, fetchMore } = useQuery(GET_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const loadMore = () => {
    if (data.images.pageInfo.hasNextPage) {
      fetchMore({
        variables: { after: data.images.pageInfo.endCursor },
      });
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-900 mb-10 text-center pt-3">
        SAMY ALLIANCE assessment
      </h1>
      <div>
        <ul className="flex flex-wrap gap-3">
          {data.images.edges.map(({ node }) => (
            <li className="flex flex-col items-center" key={node.id}>
              <img src={node.picture} alt={node.title} />
              <p>{node.title}</p>
            </li>
          ))}
        </ul>
        {data.images.pageInfo.hasNextPage && (
          <button onClick={loadMore}>Load More</button>
        )}
      </div>
    </>
  );
}

export default App;
