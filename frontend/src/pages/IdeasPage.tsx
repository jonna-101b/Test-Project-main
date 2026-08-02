import IdeaForm from '../features/ideas/IdeaForm';
import IdeaList from '../features/ideas/IdeaList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchIdeas } from '../features/ideas/ideasSlice';

function IdeasPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, error, status } = useSelector((state: RootState) => state.ideas);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, [dispatch]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Idea Tracker</h1>
        <p>Capture and browse ideas from the whole team.</p>
      </header>
      <main className="app-main">
        <IdeaForm />
        <IdeaList list={list} />
      </main>
    </div>
  );
}

export default IdeasPage;
