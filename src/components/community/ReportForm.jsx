import { useState } from 'react'
import DetailHeader from '../ui/DetailHeader'
import FormField from '../ui/FormField'

export default function ReportForm({ handleBack, onSubmit }) {
  const [reportForm, setReportForm] = useState({
    name: '', color: '', location: '', date: '', time: '', serial: '', desc: ''
  })

  const set = (field) => (e) => setReportForm({ ...reportForm, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(reportForm)
  }

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      <DetailHeader
        onBack={handleBack}
        title="Report Stolen Bike"
        titleClass="text-lg font-bold flex-1 text-center text-red-600"
        rightSlot={<div className="w-8" />}
      />

      <div className="flex-1 overflow-y-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <FormField label="Bike Model / Name" required value={reportForm.name} onChange={set('name')} placeholder="e.g. Trek Domane AL 2" />

            <div className="grid grid-cols-2 gap-4">
              <FormField label="Color" required value={reportForm.color} onChange={set('color')} placeholder="e.g. Red & Black" />
              <FormField label="Serial Number" value={reportForm.serial} onChange={set('serial')} placeholder="Optional" />
            </div>

            <FormField label="Last Seen Location" required value={reportForm.location} onChange={set('location')} placeholder="e.g. Downtown Metro Station" />

            <div className="grid grid-cols-2 gap-4">
              <FormField label="Date" required value={reportForm.date} onChange={set('date')} placeholder="e.g. Oct 24, 2023" />
              <FormField label="Time" value={reportForm.time} onChange={set('time')} placeholder="e.g. 2:00 PM" />
            </div>

            <FormField label="Description / Distinct Features" as="textarea" rows={3} value={reportForm.desc} onChange={set('desc')} placeholder="Any stickers, scratches, or custom parts?" />
          </div>

          <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            <span>🚨</span> Submit Theft Report
          </button>
        </form>
      </div>
    </div>
  )
}
