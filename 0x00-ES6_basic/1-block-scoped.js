export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // No reassignment or redeclaration within the block
  }

  return [task, task2];
}
