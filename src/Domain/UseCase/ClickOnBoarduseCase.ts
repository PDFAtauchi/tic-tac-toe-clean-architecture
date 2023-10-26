// import type { Board, Square } from "Domain/Model";
import type { Repository } from "Domain/Repository";
import { isNextTurnX, calculateWinnerOnBoard } from "Domain/UseCase/Utils";

export async function clickOnBoard(
  indexOnBoard: number,
  repository: Repository
) {
  const { board, stepNumber } = await repository.getCurrentStep();
  const newBoard = board.slice();
  if (calculateWinnerOnBoard(newBoard) || newBoard[indexOnBoard]) {
    return;
  }
  newBoard[indexOnBoard] = isNextTurnX(stepNumber) ? "X" : "O";
  await repository.deleteStepsAfterCurrentStepNumber();
  await repository.addStep(newBoard);
  await repository.setCurrentStepNumber(stepNumber + 1);
}
