import React from "react";
import SingleCard from "./SingleCard";

export default function UserCards() {
  return (
    <div>
      <SingleCard title="Title 1" subtitle="subtitle text" />
      <div> </div>
      <div> </div>
      <div>
        <SingleCard
          title="title 2"
          subtitle="card subtitle"
          footer="custom footer text"
        />
      </div>

      <SingleCard />
    </div>
  );
}
