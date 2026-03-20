export default function EmptyState({ icon, message }) {
  return (
    <div className="text-center py-10">
      <span className="text-4xl block mb-2">{icon}</span>
      <p className="text-sm font-bold text-gray-500">{message}</p>
    </div>
  )
}
