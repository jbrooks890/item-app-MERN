import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import apiUrl from "../../config";

const Item = () => {
  const [item, setItem] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  const ITEM_LINK = `${apiUrl}/items/${id}`;
  let navigate = useNavigate();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(ITEM_LINK);
        console.log(response);
        setItem(response.data.item);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const destroy = () => {
    axios({
      url: ITEM_LINK,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  useEffect(() => {
    if (!item) {
      return <p>Loading...</p>;
    }
  }, [item]);

  return (
    <Layout>
      <h4>{item.title}</h4>
      <p>Link: {item.link}</p>
      <button onClick={destroy}>Delete</button>
      <NavLink to={`/items/${id}/edit`}>
        <button>Edit</button>
      </NavLink>

      <NavLink to="/items">Back</NavLink>
    </Layout>
  );
};

export default Item;
