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
    const [sortType, setSortType] = useState('');
    const filteredItems = searchQuery? items.filter(item => item.title.includes(searchQuery)) : items;
    const displayedItems = sortType? filteredItems.toSorted((a, b) => {
        switch (sortType) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'date':
                return (new Date(a.createdAt)).getDate() - (new Date(b.createdAt).getDate());
            default:
                return 0;
        }
    }) : filteredItems;
    return (
        <>
            <div className="flex gap-3 items-center">
                <input className="border-1 border-gray-300 rounded-md p-1" type="text"
                    placeholder="search item..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex gap-2">
                    <label htmlFor="sort">
                        Sort by: 
                        
                    </label>
                    <select id="sort" name="sort" className="border-1 border-gray-400 rounded-sm"
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="date">Date</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
            
            <ul className="flex flex-col items-center gap-6">
                {displayedItems.map(item => (
                    <li key={item.id}>
                        <ItemLink item={item}></ItemLink>
                    </li>
                ))}
            </ul>
        </>
    );
}