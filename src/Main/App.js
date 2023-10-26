import React from "react";
import { OnMemoryDataSourceImpl, RepositoryImpl } from "Data";
import { TicTacToeView } from "Presentation";

// Dependency injection
const dataSource = new OnMemoryDataSourceImpl();
const repository = new RepositoryImpl(dataSource);

export default function App() { 
  <button>Hi</button>
  return <TicTacToeView repository={repository} />;
}
