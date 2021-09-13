import React from "react";
import BuyItemCard from "./BuyItemCard";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="album py-4 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
              <BuyItemCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
