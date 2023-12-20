
import React, { useState } from 'react'
import { Listbox, Transition } from "@headlessui/react";


export default function Countrylist() {
    const countryLangList = [
        { name: 'EN', FlagUrl: '/flag1.png' },
        { name: 'Fre', FlagUrl: '/flag1.png' },
        { name: 'CN', FlagUrl: '/flag1.png' },
    ]
    const [selectedCountLang, setSelectedCountLang] = useState(countryLangList[0]);

    return (
        <>
            <div className="language__wrap">
                <Listbox as="div" className="space-x-4"
                    value={selectedCountLang}
                    onChange={setSelectedCountLang}
                >
                    {({ open }) => (
                        <>
                            <div className="flag">
                                <img
                                    alt="flag"
                                    loading="lazy"
                                    width="32"
                                    height="24"
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: "transparent" }}
                                    srcSet={selectedCountLang.FlagUrl}
                                    src={selectedCountLang.FlagUrl}
                                />
                            </div>
                            <div className="selector relative">
                                <Listbox.Button className="btn" aria-haspopup="listbox" aria-expanded={open}>
                                    {selectedCountLang.name}
                                </Listbox.Button>
                                <Listbox.Options
                                    className={`${open ? "block" : "hidden"
                                        } origin-top-right absolute right-0 mt-2 py-2 w-32 bg-white border border-gray-300 rounded-lg shadow-md`}
                                >
                                    {countryLangList.map((language) => (
                                        <Listbox.Option key={language.name} value={language}>
                                            {({ active, selected }) => (
                                                <li
                                                    className={`${active
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "text-gray-900"
                                                        } cursor-pointer select-none relative px-2 py-2`}
                                                    onClick={() => {
                                                        setSelectedCountLang(language);
                                                    }}
                                                >
                                                    {language.name}
                                                    {selected && (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-5 w-5"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>


        </>
    )
}
