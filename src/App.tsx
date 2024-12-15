import { ProfileCard } from './components/ProfileCard';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <ProfileCard
        avatarUrl="./assets/avatar.png"
        name="Альфа"
        title="Full-stack Developer"
      />
    </div>
  );
}

export default App;