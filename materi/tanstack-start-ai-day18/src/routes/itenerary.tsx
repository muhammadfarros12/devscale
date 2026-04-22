import { createFileRoute } from "@tanstack/react-router";
import {
	CalendarDays,
	Clock3,
	Gem,
	Loader2,
	MapPin,
	PlaneTakeoff,
	Wallet,
} from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import {
	createItenerary,
	type ItenerarySchema,
} from "#/modules/itenerary/server-fn";

export const Route = createFileRoute("/itenerary")({
	component: RouteComponent,
});

const timeStyles = {
	morning: "border-amber-300/50 bg-amber-50 text-amber-950",
	afternoon: "border-emerald-300/50 bg-emerald-50 text-emerald-950",
	evening: "border-stone-300/70 bg-stone-100 text-stone-950",
} as const;

const formatCurrency = (value: number) =>
	new Intl.NumberFormat("id-ID", {
		currency: "IDR",
		maximumFractionDigits: 0,
		style: "currency",
	}).format(value || 0);

function RouteComponent() {
	const [userData, setUserData] = useState({
		city: "",
		days: 0,
		budget: 0,
	});
	const [result, setResult] = useState<ItenerarySchema | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	async function handleGenerateItenerary() {
		setIsLoading(true);
		const res = await createItenerary({
			data: {
				city: userData.city,
				days: userData.days,
				budget: userData.budget,
			},
		});
		setResult(res);
		setIsLoading(false);
	}

	return (
		<main className="min-h-screen px-4 py-8 text-stone-950 sm:px-6 lg:px-8">
			<div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-8">
				<section className="border border-stone-200 bg-white/90 p-6 shadow-[0_24px_80px_rgba(28,25,23,0.08)] backdrop-blur sm:p-8">
					<div className="mb-8 flex items-center justify-between gap-4 border-b border-stone-200 pb-6">
						<div>
							<p className="mb-3 text-xs font-semibold uppercase leading-none tracking-[0.18em] text-amber-700">
								Bespoke journey
							</p>
							<h1 className="display-title text-4xl font-medium leading-none text-stone-950 sm:text-5xl">
								Create Itenerary
							</h1>
						</div>
						<div className="flex size-12 shrink-0 items-center justify-center border border-stone-200 bg-stone-50 text-amber-700">
							<Gem className="size-5" aria-hidden="true" />
						</div>
					</div>

					<div className="space-y-5">
						<label className="block space-y-2" htmlFor="itinerary-city">
							<span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
								Destination
							</span>
							<Input
								id="itinerary-city"
								type="text"
								placeholder="City, Country"
								className="h-12 rounded-none border-stone-300 bg-white px-4 text-stone-950 shadow-none placeholder:text-stone-400 focus-visible:border-amber-700 focus-visible:ring-amber-700/20"
								onChange={(e) => {
									setUserData({ ...userData, city: e.target.value });
								}}
							/>
						</label>
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							<label className="block space-y-2" htmlFor="itinerary-days">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
									Length
								</span>
								<div className="relative">
									<CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
									<Input
										id="itinerary-days"
										type="number"
										placeholder="Days"
										className="h-12 rounded-none border-stone-300 bg-white pl-11 text-stone-950 shadow-none placeholder:text-stone-400 focus-visible:border-amber-700 focus-visible:ring-amber-700/20"
										onChange={(e) => {
											setUserData({
												...userData,
												days: Number(e.target.value),
											});
										}}
									/>
								</div>
							</label>
							<label className="block space-y-2" htmlFor="itinerary-budget">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
									Daily budget
								</span>
								<div className="relative">
									<Wallet className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
									<Input
										id="itinerary-budget"
										type="number"
										placeholder="Budget perdays"
										className="h-12 rounded-none border-stone-300 bg-white pl-11 text-stone-950 shadow-none placeholder:text-stone-400 focus-visible:border-amber-700 focus-visible:ring-amber-700/20"
										onChange={(e) => {
											setUserData({
												...userData,
												budget: Number(e.target.value),
											});
										}}
									/>
								</div>
							</label>
						</div>
						<Button
							type="submit"
							disabled={isLoading}
							onClick={handleGenerateItenerary}
							className="h-12 w-full rounded-none bg-stone-950 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-none hover:bg-amber-800"
						>
							{isLoading ? (
								<>
									<Loader2 className="size-4 animate-spin" aria-hidden="true" />
									Creating
								</>
							) : (
								<>
									<PlaneTakeoff className="size-4" aria-hidden="true" />
									Create
								</>
							)}
						</Button>
					</div>
				</section>

				<section className="border border-stone-200 bg-stone-950 text-white shadow-[0_24px_80px_rgba(28,25,23,0.14)]">
					<div className="border-b border-white/10 p-6 sm:p-8">
						<p className="mb-3 text-xs font-semibold uppercase leading-none tracking-[0.18em] text-amber-300">
							Curated plan
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<h2 className="display-title text-3xl font-medium leading-tight sm:text-4xl">
									{result?.city || "Awaiting destination"}
								</h2>
								<p className="mt-2 max-w-xl text-sm leading-6 text-stone-300">
									{result
										? `${result.days} day${result.days === 1 ? "" : "s"} planned with ${formatCurrency(result.budget)} per day.`
										: "Enter your travel details to generate a refined day-by-day itinerary."}
								</p>
							</div>
							{result ? (
								<div className="grid grid-cols-2 gap-3 text-sm text-stone-300 sm:min-w-56">
									<div className="border border-white/10 p-3">
										<div className="text-xl font-semibold text-white">
											{result.days}
										</div>
										<div>Days</div>
									</div>
									<div className="border border-white/10 p-3">
										<div className="text-xl font-semibold text-white">
											{result.items.length}
										</div>
										<div>Stops</div>
									</div>
								</div>
							) : null}
						</div>
					</div>

					<div className="p-4 sm:p-6">
						{result ? (
							<div className="divide-y divide-white/10">
								{result.items.map((item) => (
									<article
										key={`${item.numberOfDay}-${item.time}-${item.place}-${item.location}-${item.activity}`}
										className="grid gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr]"
									>
										<div>
											<div className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
												Day
											</div>
											<div className="mt-1 text-3xl font-semibold leading-none text-white">
												{item.numberOfDay}
											</div>
										</div>
										<div className="space-y-3">
											<div className="flex flex-wrap items-center gap-3">
												<span
													className={`inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${timeStyles[item.time]}`}
												>
													<Clock3 className="size-3.5" aria-hidden="true" />
													{item.time}
												</span>
												<span className="inline-flex items-center gap-1.5 text-sm text-stone-300">
													<MapPin
														className="size-4 text-amber-300"
														aria-hidden="true"
													/>
													{item.location}
												</span>
											</div>
											<div>
												<h3 className="text-xl font-semibold leading-snug text-white">
													{item.place}
												</h3>
												<p className="mt-2 max-w-2xl text-sm leading-6 text-stone-300">
													{item.activity}
												</p>
											</div>
										</div>
									</article>
								))}
							</div>
						) : (
							<div className="flex min-h-96 items-center justify-center border border-dashed border-white/15 bg-white/[0.03] p-8 text-center">
								<div className="max-w-sm">
									<PlaneTakeoff
										className="mx-auto mb-5 size-8 text-amber-300"
										aria-hidden="true"
									/>
									<h3 className="display-title text-2xl font-medium text-white">
										Your itinerary will appear here
									</h3>
									<p className="mt-3 text-sm leading-6 text-stone-400">
										A quiet, structured view for each day, time, location, and
										planned activity.
									</p>
								</div>
							</div>
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
