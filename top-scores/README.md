# Top Scores

## Instructions

Write a function that takes:

1. an array of `unsortedScores`
2. the `highestPossibleScore` in the game

and returns a sorted array of scores in less than
_O(n lg n)_ time.


## Example

```ts
const unsortedScores: number[] = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE: number = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
//=> [91, 89, 65, 53, 41, 37]
```

## Trivia

* players receive a score between `0` and `100`.
* the highest possible score never changes (time complexity).
* the returned array should be sorted descending.
