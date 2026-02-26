'use client';

import Divider from '~/components/divider';
import Experiences from '~/components/experiences';
import GlowingText from '~/components/glowing-text';
import Skills from '~/components/skills';
import MagnetLines from '~/components/magnet-lines';
import dynamic from 'next/dynamic';

const MainText = dynamic(() => import('~/components/main-text'));
const Cat = dynamic(() => import('~/components/cat'));

const Page = () => {
    return (
        <>
            <section className="relative space-y-8 py-8">
                <main className="grid items-center py-30 sm:grid-cols-2 sm:py-0">
                    <div className="space-y-8">
                        <MainText />
                        <p>welcome to my den of code, stories, and the occasional nya~ nap.</p>
                    </div>
                    <Cat />
                </main>
                <Divider />
                <h2 className="text-lg">a little about me</h2>
                <p>
                    hi, i&apos;m <GlowingText>Dhairya</GlowingText> — backend dev.
                    <br />
                    <br />
                    i like building systems, breaking them, then fixing them properly. most of my time lives
                    in a terminal — clean APIs, fast backends, keyboard-first everything.
                    <br />
                    <br />
                    cat person. anime watcher. minimal human.
                </p>
                <Divider />
                <Skills />
                <Divider />
                <Experiences />
                <Divider />
                <div className="flex flex-wrap justify-center gap-2 text-sm opacity-50">
                    {['chess', 'open source', 'cats nya~', 'cli tools', 'late night commits'].map((tag) => (
                        <span key={tag} className="border-primary-400 border px-3 py-1">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
            <MagnetLines />
        </>
    );
};

export default Page;
