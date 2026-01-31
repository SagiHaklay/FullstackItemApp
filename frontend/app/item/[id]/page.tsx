import { getItemById } from "@/app/lib/data";
import Link from "next/link";
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
        <div className="flex flex-col p-6 gap-4">
            <Link href={'/'} className="text-blue-500 underline">Back to item list</Link>
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p>
                {item.description}
            </p>
            created at: {`${item.createdAt}`}
            <div>
                <Link className="bg-blue-500 text-white rounded-md p-2" href={`/item/${id}/edit`}>Edit</Link>
            </div>
        </div>
    );
}