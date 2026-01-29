import Link from 'next/link';
import { getItems } from "./lib/data";
import { ItemList } from "./ui/item-list";


export default async function Home() {
  const items = await getItems();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>My Items</h1>
        <Link href={'/item/add'}>Add Item</Link>
        <ItemList items={items}></ItemList>
      </main>
    </div>
  );
}
