import Context from '../context/Context';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 20px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
`;

const RepoInfo = () => {
	return (
	  <Context.Consumer>
      {context => (
        <>
          {!context.isLoading && context.currentRepoStat && (
            <ContainerDiv>
              <p><b>Total forks:</b> {context.currentRepoStat.forks}</p>
              <p><b>Open issues:</b> {context.currentRepoStat.open_issues}</p>
              <p><b>Watchers:</b> {context.currentRepoStat.watchers}</p>
            </ContainerDiv>
          )}
        </>
      )}
	  </Context.Consumer>
	);
};

export default RepoInfo;