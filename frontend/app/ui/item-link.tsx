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
            <Link href={`/item/${item.id}`}>
                {item.title}
            </Link>
            <button className="bg-red-400 text-white rounded-md p-2" type="button" onClick={async () => {
                await deleteItem(`${item.id}`);
            }}>Remove</button>
        </div>
    );
}