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
              <a href="/checkout">
                <BuyItemCard
                  name="Old desktop monitor"
                  price="1000.00"
                  link="https://res.cloudinary.com/waste123/image/upload/v1631727010/wasteImage/dejmsuv9fsyzz4i1ue68.jpg"
                />
              </a>
              <a href="/checkout">
                <BuyItemCard
                  name="Tin"
                  price="150.00"
                  link="https://res.cloudinary.com/waste123/image/upload/v1631626752/wasteImage/ygx56kweo9smqhxxauxt.jpg"
                />
              </a>{" "}
              <a href="/checkout">
                <BuyItemCard
                  name="Pens"
                  price="500.00"
                  link="https://res.cloudinary.com/waste123/image/upload/v1631622906/wasteImage/bmwsjf9norhelzh3xikb.jpg"
                />
              </a>{" "}
              <a href="/checkout">
                <BuyItemCard
                  name="Plastic Chairs"
                  price="100.00"
                  link="https://res.cloudinary.com/waste123/image/upload/v1631446321/wasteImage/n14w3pjrl1itlmdtwhih.jpg"
                />
              </a>{" "}
              <a href="/checkout">
                <BuyItemCard
                  name="Glass Bottle"
                  price="250.00"
                  link="https://res.cloudinary.com/waste123/image/upload/v1631445602/wasteImage/hldm11wfjpqktfaprfiv.jpg"
                />
              </a>{" "}
              <a href="/checkout">
                <BuyItemCard
                  name="Plastic Bottle"
                  price="50.00"
                  link="https://res.cloudinary.com/waste123/image/upload/v1631373768/wasteImage/aah3tg4ucnktzpnivn5q.jpg"
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
