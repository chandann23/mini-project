'use client';

import { Button } from '@/components/ui/button'; // Assuming you have a reusable Button component
import { PlusIcon } from '@heroicons/react/24/solid'; // Install Heroicons: npm install @heroicons/react
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const handleAddProduct = () => {
    // Logic for navigating to the product form or triggering a modal can go here
    console.log('Add Product button clicked');
    router.push('/admin/addProduct');
  };

  return (
    <div className="p-4">
      <Button 
        onClick={handleAddProduct} 
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        <PlusIcon className="w-5 h-5" />
        Add Product
      </Button>
    </div>
  );
}

