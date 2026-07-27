import { useState, type MouseEvent } from "react";
import SubmitButton from "../../components/SubmitButton";
import axios from "axios";

function IdeaForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/", { title, description });
      console.log("Succesful", res);
    }
    catch {
      console.log("Error occurred!")
    }
  };

  return (
    <form className="idea-form">
      <h2>Submit a new idea</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. Solar-powered backpack"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your idea..."
        rows={4}
      />

      <SubmitButton type="submit" onClick={handleSubmit}>
        Submit idea
      </SubmitButton>
    </form>
  );
}

export default IdeaForm;
