import { deleteItem } from "../lib/data";
import { Item } from "../lib/Item";
import Link from "next/link";

export function ItemLink({
    item
}: {
    item: Item
}) {

    return (
        <div className="flex gap-6 items-center">
            <span>
                {item.title}
            </span>
            <Link href={`/item/${item.id}`} className="bg-blue-400 text-white rounded-md p-2">
                Go to page
            </Link>
            <button className="bg-red-400 text-white rounded-md p-2" type="button" onClick={async () => {
                await deleteItem(`${item.id}`);
            }}>Remove</button>
        </div>
    );
}