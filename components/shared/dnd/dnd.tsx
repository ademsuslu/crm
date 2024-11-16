"use client"
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./item";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
const Dnd = () => {
    const [items, setItems] = useState(initialItems);

    return (
      <Reorder.Group
         className="w-full h-full "
        axis="y"
        onReorder={setItems}
        values={items}
        style={{  border: "1px solid black" }}
        layoutScroll
      >
        {items.map((item) => (
          <Item   key={item} item={item} />
        ))}
      </Reorder.Group>
    )
}

export default Dnd