import ListingTable from "@/app/components/cms/listingTable";

export default function Page() {
    const tableHeaders = [
        { label: "S.No", key: "id" },
        { label: "Title", key: "title" },
        { label: "Status", key: "status" },
        { label: "Created", key: "publishedAt" },
    ];

    return (
        <div className="page w-full h-full p-10 bg-cms-grey rounded-lg">
            <ListingTable
                headers={tableHeaders}
                url="/api/v1/pages"
                options={true}
            />
        </div>
    );
}