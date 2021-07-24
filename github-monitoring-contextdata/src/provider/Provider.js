import Context from '../context/Context';
import { useState, useEffect } from "react";

function Provider(props) {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState([]);
  const [currentRepoStat, setCurrentRepoStat] = useState({});
  const [owner, setOwner] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRepoFetching, setIsRepoFetching] = useState(true);

  const [currRepoFilterType, setCurrRepoFilterType] = useState('all');

  const handleRepoSelect = (item) => {
    if (currentRepoStat.id !== item.id && !isLoading) {
      setIsLoading(true);
      fetch(`https://api.github.com/repos/${item.owner.login}/${item.name}/commits`)
        .then(resp => resp.json())
        .then(data => {
          setIsLoading(false);
          setCurrentRepoStat(item);
          setCurrentRepo(data);
        });
    }
  };

  const handleRepoFilterType = (e) => {
    const filterValue = e.target.value;
    fetchData(filterValue);
  };

  const fetchData = (filterType = 'all') => {
    setIsLoading(true);
    setIsRepoFetching(true);
    fetch(`https://api.github.com/orgs/netflix/repos?type=${filterType}`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setCurrRepoFilterType(filterType);
        if (data.length > 0) {
          const repo = data[0];
          setOwner(repo.owner);
          setCurrentRepoStat(repo);
          fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`)
            .then(response => response.json())
            .then(resp => {
              setCurrentRepo(resp);
              setIsLoading(false);
              setIsRepoFetching(false);
            });
        } else {
          setCurrentRepo([]); // empty data then there should be no repo matching
          setIsLoading(false);
          setIsRepoFetching(false); 
        }
      });
  };

  useEffect(() => {
    fetchData('all');
  }, []);

  return (
    <Context.Provider
      value={{
        owner,
        repos,
        currentRepo,
        isLoading,
        isRepoFetching,
        currRepoFilterType,
        currentRepoStat,
        handleRepoSelect,
        handleRepoFilterType,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;

