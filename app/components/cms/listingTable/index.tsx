"use client";

import React from "react";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import useFetchData from "@/app/hooks/useFetchData";
import NewItem from "./NewItem";

interface TableResponse {
    success: boolean;
    message: string;
    data: Record<string, any>[];
}

export default function ListingTable({
    headers,
    url,
    options = false,
    create = true,
}: {
    headers: Array<{
        label: string;
        key: string;
    }>;
    url: string;
    options?: boolean;
    create?: boolean;
}) {
    const { data, loading, error } = useFetchData<TableResponse>(url);

    const columnCount = headers.length + (options ? 1 : 0);

    return (
        <section className="flex flex-col gap-10">
            {create && <NewItem type ="pages"/>}
            <div className="tableListing w-full overflow-x-auto text-left">
                <table className="table-auto w-full ">
                    <thead className="bg-cms-light-green text-black">
                        <tr>
                            {headers.length > 0 &&
                                headers.map((item) => (
                                    <th
                                        key={item.key}
                                        className={`p-5 w-80 first:rounded-l-lg last:rounded-r-lg max-[900px]:w-30 ${{
                                                id: "w-50",
                                                title: "w-auto",
                                            }[item.key] ?? ""
                                            }`}
                                    >
                                        {item.label}
                                    </th>
                                ))}

                            {options && (
                                <th className="p-5 text-center w-80 rounded-r-lg max-[900px]:w-30">
                                    Options
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {loading &&
                            [1, 2, 3, 4, 5].map((row) => (
                                <tr key={row} className="border-b border-slate-200">
                                    {headers.map((header) => (
                                        <td key={header.key} className="p-5">
                                            <div className="h-10 w-full rounded-md bg-slate-300 animate-pulse" />
                                        </td>
                                    ))}

                                    {options && (
                                        <td className="p-5">
                                            <div className="mx-auto h-10 w-16 rounded-md bg-slate-300 animate-pulse" />
                                        </td>
                                    )}
                                </tr>
                            ))}

                        {!loading && error && (
                            <tr>
                                <td
                                    colSpan={columnCount}
                                    className="p-8 text-center text-red-600"
                                >
                                    Failed to load data: {error}
                                </td>
                            </tr>
                        )}

                        {!loading && !error && !data?.success && (
                            <tr>
                                <td
                                    colSpan={columnCount}
                                    className="p-8 text-center text-slate-500"
                                >
                                    Unable to load data.
                                </td>
                            </tr>
                        )}

                        {!loading && !error && data?.success && (
                            <>
                                {data.data.map((item, index) => (
                                    <tr key={item._id ?? index} className="border-b border-slate-200 hover:bg-slate-50">
                                        {headers.map((header) => (
                                            <td key={header.key} className="p-5">
                                                {header.key === "id" ? (
                                                    index + 1
                                                ) : header.key === "title" ? (
                                                    <Link
                                                        href={`/admin/pages/${item._id}`}
                                                        className="text-cms-green"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ) : header.key === "status" ? (
                                                    <span className={`inline-block rounded-lg px-3 py-2 text-sm font-medium ${
                                                        item.status === "published"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-slate-100 text-slate-600"
                                                    }`}>
                                                        {item.status}
                                                    </span>
                                                ) : header.key === "publishedAt" ? (
                                                    item.publishedAt
                                                        ? new Date(item.publishedAt).toLocaleDateString("en-IN", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        })
                                                        : "-"
                                                ) : (
                                                    item[header.key] ?? "-"
                                                )}
                                            </td>
                                        ))}
                                        {options && (
                                            <td className="p-5 text-center">
                                                <button
                                                    type="button"
                                                    aria-label={`Options for ${item.title ?? "this row"}`}
                                                    className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-200"
                                                >
                                                    <EllipsisVertical size={20} />
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))}

                                {data.data.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={columnCount}
                                            className="p-8 text-center text-slate-500"
                                        >
                                            No records found.
                                        </td>
                                    </tr>
                                )}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
