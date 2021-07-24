import Context from '../context/Context';
import moment from 'moment';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  cursor: pointer;
  height: calc(100% - 190px);
  overflow-x: auto;
`;

const Li = styled.li`
  padding: 20px;
`;

const CommitTitle = styled.a`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: bold;
`;

const CommitSubtitle = styled.div`
  font-size: 14px;
  color: #a9a9a9;
  font-style: oblique;
  margin-top: 5px;
`;

const LoadingDiv = styled.div`
  text-align: center;
  padding-top: 40px;
`;

const Commit = ({ data }) => {
  const { commit, author, committer } = data;
  return (
    <div>
      <CommitTitle href={commit.url} target="_blank" rel="noreferrer">{commit.message}</CommitTitle>
      {(author && committer) ? <CommitSubtitle>
        <a href={author.url} target="_blank" rel="noreferrer">{author.login}</a> authored and&nbsp;
          <a href={committer?.url} target="_blank" rel="noreferrer">{committer?.login}</a> commited on {moment(commit.committer.date).format('MMM Do YYYY')}
      </CommitSubtitle> : <CommitSubtitle>Auto commit</CommitSubtitle>}
    </div>
  );
};

const RepoCommits = () => {
  return (
    <Context.Consumer>
      {context => (
        <>
          {context.isLoading && <LoadingDiv>
            <img width="128" height="128" src="https://media.giphy.com/media/3oz8xAmBuHhBOOXIv6/giphy.gif" alt="Loading..."></img>    
          </LoadingDiv>}
          {!context.isLoading && context.currentRepo.length > 0 && (
            <Ul>
              {context.currentRepo.map((item) => (
                <Li key={item.sha}>
                  <Commit data={item} />
                </Li>
              ))}
            </Ul>
          )}
        </>
      )}
    </Context.Consumer>
  );
};

export default RepoCommits;