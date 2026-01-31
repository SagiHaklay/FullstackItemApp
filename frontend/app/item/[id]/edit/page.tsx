import { getItemById, updateItem } from "@/app/lib/data";
import { ItemForm } from "../../ui/item-form";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
    params
}: {
    params: Promise<{ id: string}>
}) {
    const { id } = await params;
    const item = await getItemById(id);
    if (!item) {
        notFound();
    }

    return (
        <div className="p-4 flex flex-col">
            <Link href={`/item/${id}`} className="text-blue-500 underline">Back to item page</Link>
            <h1 className="text-lg font-bold text-center">Edit Item</h1>
            <ItemForm formAction={updateItem} initialItem={item}></ItemForm>
        </div>
    );
}