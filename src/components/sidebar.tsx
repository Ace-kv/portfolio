import Link from "next/link"
import Image from "next/image"
import { Envelope, Linkedin, Twitter, Github } from "./icons/icons"

export default function Sidebar ({ data }: 
    {data: {
        name: string,
        role: string,
        education: string[],
        contactLinks: string[]
        }
    }) {
    const {name, role, education, contactLinks} = data

    return (
        <div className="bg-[#1C1F26] flex flex-col h-screen sm:justify-around sm:w-1/3 sm:fixed">
            <div className="text-white flex flex-col p-10 items-center">
                <Image 
                    priority
                    src='/images/pfp.jpeg' 
                    className="rounded-full h-full mb-5"
                    height={270}
                    width={270}
                    alt="Profile picture"
                    aria-label="Profile picture"
                />
                <h1 className="mb-1">{name}</h1>
                <h2 className="mb-6">{role}</h2>
                <p className="mb-5">{education[0]}</p>
                <p className="mb-2">{education[1]}</p>

                <div className="text-center mb-9 mt-5 sm:mt-5">
                    <h2 className="mb-1.5">Contact Me</h2>
                    <div className="flex flex-row justify-center gap-4">
                        <Link className="text-3xl -mt-1" href={contactLinks?.[0]} aria-label="email link">
                            <Envelope />
                        </Link>
                        <Link 
                            className="text-2xl"
                            href={contactLinks?.[1]} 
                            aria-label="twitter link"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Twitter />
                        </Link>
                        <Link 
                            className="text-2xl"
                            href={contactLinks?.[2]} 
                            aria-label="linkedin link"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Linkedin />
                        </Link>
                        <Link 
                            className="text-2xl"
                            href={contactLinks?.[3]} 
                            aria-label="github link"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Github />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}