// Styles
import * as Styled from "./ReposList.styled";

// Types
import { Repository } from 'types/types'; // Ensure you have the correct import statement

type RepositoryProps = {
  RepositoryArray: Repository[];
};

export const RepoList: React.FC<RepositoryProps> = ({ RepositoryArray }) => {
  return (
    <Styled.RepoList>
      {RepositoryArray.map((repo) => (
        <Styled.RepoItem key={repo.id}>
          <Styled.RepoLink href={repo.html_url}>{repo.name}</Styled.RepoLink>
        </Styled.RepoItem>
      ))}
    </Styled.RepoList>
  );
};
