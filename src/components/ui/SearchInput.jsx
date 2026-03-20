export default function SearchInput({ value, onChange, placeholder, focusRingColor = 'focus-within:ring-blue-500', wrapperClass = 'bg-white border border-gray-200 shadow-sm' }) {
  return (
    <div className={`rounded-xl px-4 py-3 flex items-center gap-3 focus-within:ring-2 ${focusRingColor} transition-all ${wrapperClass}`}>
      <span className="text-gray-400 text-lg">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent border-none outline-none text-sm font-medium flex-1 text-gray-800 placeholder-gray-500 h-full"
      />
    </div>
  )
}
