import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import ItemForm from "../shared/ItemForm";
import apiUrl from "../../config";

const ItemEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({
    title: "",
    link: "",
  });
  const [updated, setUpdated] = useState(false);
  const ITEM_LINK = `${apiUrl}/items/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(ITEM_LINK);
        setItem(response.data.item);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const updatedField = { [e.target.name]: e.target.value };
    const editedItem = Object.assign(item, updatedField);
    setItem(editedItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: ITEM_LINK,
      method: "PUT",
      data: item,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) navigate(`/items/${id}`);
  });

  return (
    <Layout>
      <ItemForm
        item={item}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/items/${id}`}
      />
    </Layout>
  );
};

export default ItemEdit;
