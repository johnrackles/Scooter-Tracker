import {
	Link,
	type RegisteredRouter,
	type ValidateLinkOptionsArray,
} from "@tanstack/react-router";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";

type Data = {
	navMain: {
		title: string;
		to: string;
		items: ValidateLinkOptionsArray<RegisteredRouter, ReadonlyArray<unknown>>;
	}[];
};

const data: Data = {
	navMain: [
		{
			title: "Scooter",
			to: "#",
			items: [
				{
					title: "List",
					to: "/scooter",
				},
				{
					title: "Add",
					to: "/scooter/add",
				},
			],
		},
		{
			title: "Manufacturers",
			to: "#",
			items: [
				{
					title: "List",
					to: "/",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to="/">
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Scooter Tracker</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				{/* We create a SidebarGroup for each parent. */}
				{data.navMain.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<Link to={item.to} activeOptions={{ exact: true }}>
												{item.title}
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
