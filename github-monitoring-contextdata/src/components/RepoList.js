import Context from '../context/Context';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  cursor: pointer;
  height: calc(100% - 100px);
  overflow-x: auto;
`;

const Li = styled.li`
  display: block;
  margin: 20px 0;
`;

const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

const ItemSubtitle = styled.div`
  font-size: 14px;
  color: #a9a9a9;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  text-align: left;
  width: 90%;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
`;

const Img = styled.img`
  width: 300px;
  margin: 20px auto;
`;

const ResultDiv = styled.div`
  padding: 20px;
`;

const Item = ({ repo, handleRepoSelect }) => {
  return (
    <Button onClick={() => handleRepoSelect(repo)}>
      <ItemTitle>{repo.name}</ItemTitle>
      <ItemSubtitle>{repo.description}</ItemSubtitle>
    </Button>
  );
};

const RepoList = () => {
  return (
    <Context.Consumer>
      {context => (
        <>
          {context.isRepoFetching && <Img src="https://64.media.tumblr.com/f3c9c27da8351da3aee0452bffd7f6eb/tumblr_n71kcn1ch11ttqncoo1_500.gifv" alt="Loading repo list..." />}
          {!context.isRepoFetching && context.repos.length > 0 && (
            <Ul>
              {context.repos.map((item) => (
                <Li key={item.id}>
                  {context.currentRepoStat.id === item.id && <CheckCircleOutlineIcon />}
                  <Item repo={item} handleRepoSelect={context.handleRepoSelect} />
                </Li>
              ))}
            </Ul>
          )}
          {!context.isRepoFetching && context.repos.length === 0 && (
            <ResultDiv>There is no matching repo</ResultDiv>
          )}
        </>
      )}
    </Context.Consumer>
  );
};

export default RepoList;
