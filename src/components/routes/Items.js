import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../config";

const Items = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(`${apiUrl}/items`);
      console.log(response);
      setItems(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemsData = items.map((item) => {
    return (
      <NavLink to={`/items/${item._id}`}>
        <li key={item._id}>{item.title}</li>
      </NavLink>
    );
  });

  return (
    <div id="item-list">
      <h4>Items</h4>
      <ul>{items.length && itemsData}</ul>
    </div>
  );
};

export default Items;
