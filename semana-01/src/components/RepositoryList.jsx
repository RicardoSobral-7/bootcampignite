import { RepositoryItem } from "./RepositoryItem";

import'../styles/repositories.scss';

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}