import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  function fetchMeetups() {
    fetch(
      "https://reactjs-course-97d43-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let meetups = Object.keys(data).map((id) => {
          return {
            id,
            ...data[id],
          };
        });

        setMeetups(meetups);
        setLoading(false);
      });
  }

  useEffect(fetchMeetups, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
