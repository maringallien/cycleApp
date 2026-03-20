export default function getDifficultyColor(difficulty) {
  if (difficulty === 'Easy') return 'text-green-600'
  if (difficulty === 'Medium') return 'text-yellow-600'
  return 'text-red-600'
}
