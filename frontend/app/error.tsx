'use client'

export default function Error({
    error
}: {
    error: Error
}) {

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Something went wrong!</h2>
            <p>{error.message}</p>
        </div>
    );
}