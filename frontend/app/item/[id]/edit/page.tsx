import { getItemById, updateItem } from "@/app/lib/data";
import { ItemForm } from "../../ui/item-form";
import { notFound } from "next/navigation";

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
        <div>
            <h1>Edit Item</h1>
            <ItemForm formAction={updateItem} initialItem={item}></ItemForm>
        </div>
    );
}