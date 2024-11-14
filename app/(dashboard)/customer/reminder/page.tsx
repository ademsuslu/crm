export default async function ReminderPage() {
  const url = process.env.NEXT_API_URL || "http://localhost:5000/api"
  const response = await fetch(`${url}/reminder`, { cache: 'no-cache' });
  const data = await response.json();
  return <div className="w-full">
    reminder
  </div>
}