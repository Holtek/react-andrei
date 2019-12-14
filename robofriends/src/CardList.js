import React from "react";
import { robots } from "./robots";
import Card from "./Card";
class CardList extends React.Component {
  render() {
    const cardsArray = robots.map((user, i) => {
      return (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      );
    });
    return <div>{cardsArray}</div>;
  }
}
export default CardList;
