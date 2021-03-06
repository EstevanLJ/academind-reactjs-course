import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content = null;
  if (favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some!</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>Favorite Meetups</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
