"use client"

import {Link} from "@heroui/react";
import GraphingCard from "@/components/app/(main)/GraphingCard";

import linearGraphImg from "@/../public/img/landing-page/graph-previews/linear.webp";
import sinusodialGraphImg from "@/../public/img/landing-page/graph-previews/sinusodial.webp";
import logarithmicGraphImg from "@/../public/img/landing-page/graph-previews/logarithmic.webp";


export default function Home() {
    return (
        <>
            <header className="mt-10 mb-20 text-center">
                <h1 className="mb-5 text-4xl">
                    Complex Analysis Made Easy
                </h1>
                <p>
                    Visualise complex-valued functions on the complex plane.
                </p>
                <Link
                    href="/domain-coloring"
                    className="mt-5 px-4 py-2 rounded-full bg-black text-white font-medium">
                    Start Plotting
                </Link>
            </header>

            <section className="w-full max-w-[1200px] mx-auto px-3">
                <header className="text-center">
                    <h2 className="mb-3 text-2xl uppercase tracking-widest">
                        Get Started
                    </h2>
                    <p>
                        Below are a few examples you can copy, and the equations will be
                        updated directly to the editor.
                    </p>
                </header>
                <ul className="w-full mt-5 list-none grid grid-cols-1 md:grid-cols-2 gap-5">
                    <GraphingCard
                        title="Linear"
                        image={linearGraphImg}
                        equations={[
                            "@f(x) = x"
                        ]}
                    />
                    <GraphingCard
                        title="Sinusodial"
                        image={sinusodialGraphImg}
                        equations={[
                            "@f(x) = \\sin(x)"
                        ]}
                    />
                    <GraphingCard
                        title="Logarithmic"
                        image={logarithmicGraphImg}
                        equations={[
                            "@f(x) = \\ln(x)"
                        ]}
                    />
                </ul>
            </section>
        </>
    );
}
