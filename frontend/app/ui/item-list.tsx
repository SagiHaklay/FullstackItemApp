'use client'

import Link from "next/link";
import { Item } from "../lib/Item"

export function ItemList({ 
    items 
}: { 
    items: Item[] 
}) {

    return (
        <ul className="flex flex-col">
            {items.map(item => (
                <li key={item.id}>
                    <Link href={`/item/${item.id}`}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}