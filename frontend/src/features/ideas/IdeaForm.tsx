import { useState, type MouseEvent } from "react";
import SubmitButton from "../../components/SubmitButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { createIdeas } from "./ideasSlice";

function IdeaForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    dispatch(createIdeas({ title, description }));

    setTitle("");
    setDescription("");
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
