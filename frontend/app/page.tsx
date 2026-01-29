import Link from 'next/link';
import { getItems } from "./lib/data";
import { ItemList } from "./ui/item-list";


export default async function Home() {
  const items = await getItems();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 items-center py-8 px-16 bg-white dark:bg-black">
        <h1 className='text-lg font-bold'>My Items</h1>
        <Link className='bg-blue-700 text-white p-2 rounded-md' href={'/item/add'}>Add Item</Link>
        <ItemList items={items}></ItemList>
      </main>
    </div>
  );
}
