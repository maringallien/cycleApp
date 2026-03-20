const inputClass = 'w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-500 focus:bg-white transition-colors'

export default function FormField({ label, required, value, onChange, placeholder, as = 'input', rows, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">{label}{required && ' *'}</label>
      {as === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
          className={inputClass}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
