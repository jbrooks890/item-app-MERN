import { Link } from "react-router-dom";

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => {
  console.log(item.title);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">
        Title
        <input
          placeholder={item.title}
          defaultValue={item.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="link">
        Link
        <input
          placeholder="http://item-link.com"
          defaultValue={item.link}
          name="link"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};

export default ItemForm;
