import { getItemById } from "@/app/lib/data";
import Link from "next/link";

export default async function Page({
    params
}: {
    params: Promise<{ id: string}>
}) {
    const { id } = await params;
    const item = await getItemById(id);

    return (
        <div>
            <div>
                <Link href={`/item/${id}/edit`}>Edit</Link>
            </div>
            <h1>{item.title}</h1>
            <p>
                {item.description}
            </p>
            created at: {`${item.createdAt}`}
        </div>
    );
}