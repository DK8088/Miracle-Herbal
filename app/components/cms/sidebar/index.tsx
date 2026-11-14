'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Package,
  ShoppingCart,
  Mails,
  Users,
  Settings
} from "lucide-react";

export default function SideBar () {
	
	const currentPath = usePathname();

	const menus = [
		{ id: 1, label: 'Dashboard', link: '/admin', icon: LayoutDashboard },
		{ id: 2, label: 'Pages', link: '/admin/pages', icon: BookOpen },
		{ id: 3, label: 'Products', link: '/admin/products', icon: Package },
		{ id: 4, label: 'Orders', link: '/admin/orders', icon: ShoppingCart},
		{ id: 5, label: 'Inbox', link: '/admin/inbox', icon: Mails },
		{ id: 6, label: 'Users', link: '/admin/users', icon: Users },
		{ id: 7, label: 'Settings', link: '/admin/settings', icon: Settings },
	];

	return (
		<nav className="sideBar py-10 max-w-90 min-w-90 bg-cms-grey rounded-lg max-[900px]:max-w-none">
			<ul className="flex flex-col gap-15 max-[900px]:flex-row max-[900px]:justify-between max-[900px]:px-10 max-[900px]:gap-2">
				{menus.length > 0 && menus.map((item) => {
					const Icon = item.icon;
					return (
						<li
							key={item.id}
							className={`flex items-center gap-4 px-10 max-[900px]:flex-col max-[900px]:px-0 ${currentPath === item.link ? "text-cms-green font-medium": ""}`}
						>
							<Link href={item.link || ""} className="flex items-center gap-4 max-[900px]:flex-col">
								{Icon && <Icon />}
								<span className="max-[900px]:hidden">
									{item.label || ""}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	)
}
