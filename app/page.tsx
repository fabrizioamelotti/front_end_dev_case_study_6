import Link from "next/link";

export default function Page() {
    return (
        <main className="grid min-h-screen place-items-center bg-slate-50 p-6">
            <section className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Front-end Dev Case Study 6
                </span>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                    Advisor list prototype
                </h1>
                <p className="mt-4 max-w-xl text-lg text-slate-600">
                    Explore the advisor listing page built for this challenge
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <Link
                        className="rounded-full bg-teal-500 px-6 py-3 font-medium text-white transition hover:bg-teal-600"
                        href={"/list"}
                    >
                        Custom CSS
                    </Link>
                    <Link
                        className="rounded-full bg-teal-500 px-6 py-3 font-medium text-white transition hover:bg-teal-600"
                        href={"/tailwind"}
                    >
                        Tailwind
                    </Link>
                    <Link
                        className="rounded-full bg-teal-500 px-6 py-3 font-medium text-white transition hover:bg-teal-600"
                        href={"/mui"}
                    >
                        MUI
                    </Link>
                </div>
            </section>
        </main>
    );
}
