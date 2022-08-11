import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import ItemForm from "../shared/ItemForm";
import apiUrl from "../../config";

const ItemCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({
    title: "",
    link: "",
  });
  const [createdItem, setCreatedItem] = useState(null);
  const ITEM_LINK = `${apiUrl}/items`;

  const handleChange = (e) => {
    const updatedField = { [e.target.name]: e.target.value };
    const editedItem = Object.assign(item, updatedField);
    setItem(editedItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: ITEM_LINK,
      method: "POST",
      data: item,
    })
      .then((res) => setCreatedItem(res.data.item))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdItem) {
      return navigate("/items");
    }
  }, [createdItem, navigate]);

  return (
    <Layout>
      <ItemForm
        item={item}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/"
      />
    </Layout>
  );
};

export default ItemCreate;
