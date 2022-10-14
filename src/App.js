import "./App.css";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;
