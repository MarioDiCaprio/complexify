import GraphingCard from "@/components/app/(main)/GraphingCard";

export default function Home() {
    return (
        <>
            <section className="w-full max-w-[1200px] mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                <GraphingCard
                    title="Linear"
                    equations={[
                        "@f(x) = x"
                    ]}
                />
                <GraphingCard
                    title="Sinusodial"
                    equations={[
                        "@f(x) = \\sin(x)"
                    ]}
                />
                <GraphingCard
                    title="Logarithmic"
                    equations={[
                        "@f(x) = \\ln(x)"
                    ]}
                />
            </section>
        </>
    );
}
