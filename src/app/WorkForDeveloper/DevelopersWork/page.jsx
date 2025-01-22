"use client"
import Image from "next/image"
import { Building, Clock, Users, TrendingUp } from "lucide-react"
import Head from "@/app/components/WorkForDeveloper/Head"
import StepItem from "@/app/components/WorkForDeveloper/StepItem"

export default function DevelopersWork() {
    const features = [
        {
            icon: "🏦",
            title: "Keep what you earn",
        },
        {
            icon: "💵",
            title: "Get paid on time",
        },
        {
            icon: "🎁",
            title: "Get the benefits",
        },
        {
            icon: "📈",
            title: "Upgrade your skills",
        },
    ];
    return (
        <main>
            <Head />

            <div className="container mx-auto px-4 py-12 bg-white">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div className="space-y-6">
                        <StepItem
                            number={1}
                            title="Let us know about you"
                            description="Complete the registration process with your basic information."
                        />
                        <StepItem
                            number={2}
                            title="Get verified by LumioAI"
                            description="Work through our custom LumioAI screening process & E-KYC evaluation system powered by AI."
                        />
                        <StepItem
                            number={3}
                            title="Start working with the top companies"
                            description="Once verified, you can now get in touch with the best companies that are looking for exact skills that you possess. Building your career starts here."
                        />
                    </div>
                    <div className="relative h-[350px] w-11/12 rounded-lg overflow-hidden">
                        <Image
                            src={"/assets/DevWork.png"}
                            alt="Developer working"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="text-center mb-12">
                    <button size= "lg" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full mb-10">
                        Benefits of Working With LumioAI
                    </button>
                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    position: "relative",
                                    width: "150px",
                                    height: "150px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {/* Background Shape */}
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "120px",
                                        height: "120px",
                                        backgroundColor: "#f3f3f3",
                                        borderRadius: "50%",
                                        zIndex: "1",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            zIndex: "0",
                                            opacity: "0.2",
                                        }}
                                    >
                                        <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                                            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="gray" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>

                                {/* Icon and Text */}
                                <div style={{ position: "relative", zIndex: "2", fontSize: "30px" }}>{feature.icon}</div>
                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: "2",
                                        textAlign: "center",
                                        marginTop: "10px",
                                        fontWeight: "500",
                                        color: "#333",
                                    }}
                                >
                                    {feature.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-black">
                        Ready to Elevate Your Career?
                        <span role="img" aria-label="rocket">
                            🚀
                        </span>
                    </h3>
                    <button size="lg" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full mb-10">
                        Apply as Developer
                    </button>
                </div>
            </div>
        </main>
    )
}

