import React from "react";
import { Link } from "react-router-dom";
const DummyEvents = [
  {
    id: "e1",
    title: "some event",
  },
  {
    id: "e2",
    title: "another event",
  },
];
function EventsPage() {
  return (
    <>
      {" "}
      <h1>EventsPage</h1>
      <ul>
        {" "}
        {DummyEvents.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
