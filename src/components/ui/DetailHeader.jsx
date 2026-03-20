export default function DetailHeader({ onBack, title, titleClass, rightSlot, variant = 'default', elevated = false }) {
  const zClass = elevated ? 'z-20' : 'z-10'

  if (variant === 'blue') {
    return (
      <div className={`flex items-center px-4 py-3 bg-white border-b border-gray-200 sticky top-0 ${zClass}`}>
        <button onClick={onBack} className="text-blue-600 font-bold text-sm">← Back</button>
        <h1 className="flex-1 text-center font-bold text-gray-800">{title}</h1>
        <div className="w-8" />
      </div>
    )
  }

  return (
    <div className={`bg-white p-4 border-b border-gray-200 sticky top-0 flex items-center gap-3 ${zClass}`}>
      <button onClick={onBack} className="text-gray-500 font-bold">← Back</button>
      <h1 className={titleClass || 'text-lg font-bold flex-1'}>{title}</h1>
      {rightSlot}
    </div>
  )
}
