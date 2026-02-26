'use client';

import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">&copy; 2026 Dhairya Adroja. nya~</p>
            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/Dhairya3391"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="opacity-60 transition-opacity hover:opacity-100"
                >
                    <Icon icon="simple-icons:github" className="text-xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/adrojadhairya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="opacity-60 transition-opacity hover:opacity-100"
                >
                    <Icon icon="simple-icons:linkedin" className="text-xl" />
                </a>
                <a
                    href="mailto:dhairyaadroja3391@gmail.com"
                    aria-label="Email"
                    className="opacity-60 transition-opacity hover:opacity-100"
                >
                    <Icon icon="material-symbols-light:mail-outline" className="text-xl" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

