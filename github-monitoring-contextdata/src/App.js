import './App.css';
import Provider from './provider/Provider';
import RepoList from './components/RepoList';
import RepoCommits from './components/RepoCommits';
import RepoInfo from './components/RepoInfo';
import Logo from './components/Logo';


function App() {
  return (
    <Provider>
      <div className="App">
        <div className="LeftRail">
          <Logo />
          <RepoList />
        </div>
        <div className="RightRail">
          <RepoInfo />
          <RepoCommits />
        </div>
      </div>
    </Provider>
  );
}

export default App;

