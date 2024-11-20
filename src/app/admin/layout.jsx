// app/admin/layout.js
export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin area of the website',
}

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin area!</p>
    </div>

        {children}
      </div>
    </div>
  );
}
