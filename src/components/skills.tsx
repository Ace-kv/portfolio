'use client'

import { useState } from "react"

export default function Skills ({data}: {
    data: {
        id: string
        soft: { icon: string; text: string; }[]
        hard: { icon: string; text: string; }[]
    }
}) {
    const [activeTab, setActiveTab] = useState<'soft' | 'hard'>('soft')
    const setBg = (active: string) => activeTab === active ? 'bg-[#FCBF49]': 'bg-gray-200 text-[#1C1F26]'
    const setAlignment = (tab: string) => 'soft' === tab ? 'text-left' : 'text-right'
    
    return (
        <div>
            <div className="flex">
                {['soft', 'hard'].map((el, i) => {
                    return (
                        <button 
                            type="button" 
                            key={`${data.id}_b_${i}`}
                            className= {`btn ${setBg(el)} ${setAlignment(el)}`}
                            onClick={() => setActiveTab(el as 'soft' | 'hard')}>
                            {el} Skills
                        </button>
                    )
                })}
            </div>
            <div>
                <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2
                                ${activeTab === 'soft' ? 'justify-start' : 'justify-end'}`}>
                    {/* Type assertions at 12 and 25 to circumvent implicit any error at 34 
                        and resultant type mismatch error at 25 */}
                    {data[activeTab].map(({icon, text}: {icon: string, text: string}, i) => (
                        <li key={`${data.id}_s_${i}`} className="skill">
                            <span>{icon}</span> {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}