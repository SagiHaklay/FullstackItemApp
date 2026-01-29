'use client'

import { useState } from "react";
import { Item } from "../lib/Item"

import { ItemLink } from "./item-link";

export function ItemList({ 
    items 
}: { 
    items: Item[] 
}) {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredItems = searchQuery.length > 0? items.filter(item => item.title.includes(searchQuery)) : items;
    return (
        <>
            <input className="border-1 border-gray-300 rounded-md" type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
             />
            <ul className="flex flex-col items-center gap-6">
                {filteredItems.map(item => (
                    <li key={item.id}>
                        <ItemLink item={item}></ItemLink>
                    </li>
                ))}
            </ul>
        </>
    );
}