import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
export default function DogApi() {
  const [dog, setDog] = useState({});

  useEffect(() => {
    // make the api call

    getDogFact();
  }, []);

  function getDogFact() {
    // axios api call (get)
    axios.get(`https://animechan.vercel.app/api/random`).then((res) => {
      console.log(res.data);
      setDog(res.data);
    });
  }

  // install axios to make the API call
  //  create a funciton that holds the api call
  // useEffect to make the API call
  // url API
  // Card with a dog pic and a generate button

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{dog.anime}</Card.Text>
        <Card.Text>{dog.quote}</Card.Text>
        <Card.Text>-{dog.character}</Card.Text>
        <Button onClick={getDogFact}> New Quote</Button>
      </Card.Body>
    </Card>
  );
}
