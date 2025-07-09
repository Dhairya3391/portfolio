import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react';
import { getAllTypes, getContentList } from '~/utils/content';
import { formatDistance, format } from 'date-fns';
import Link from 'next/link';

const meta: Record<string, { title: string; desc: string }> = {
    stories: {
        title: 'tales from my mind',
        desc: 'a collection of stories and dev logs, sometimes about tech, sometimes about how my cat just walked across my keyboard. always written with heart and a dash of nya~',
    },
    articles: {
        title: 'scribbles & thoughts',
        desc: 'dev logs, ai prompts, automation walkthroughs, and whatever else i’m experimenting with. expect the unexpected, nya.',
    },
};

const Page = async ({ params }: { params: Promise<{ type: string }> }) => {
    const type = (await params).type;

    const list = getContentList(type);

    return (
        <section className="space-y-8 py-8">
            <div className="space-y-4">
                <h1 className="text-4xl">{meta[type].title}</h1>
                <p>{meta[type].desc}</p>
            </div>
            <TabGroup as={Fragment}>
                <TabList>
                    <span>lang: </span>
                    {list.lang.map((lang) => (
                        <Tab
                            className="data-[selected]:bg-primary-800 data-[selected]:data-[hover]:bg-primary-800 data-[hover]:bg-primary-300 px-4 py-2 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[selected]:text-white"
                            key={lang}
                        >
                            {lang}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {list.contents.map((content) => (
                        <TabPanel key={content.lang}>
                            {content.contents.map((item) => (
                                <div className="border-primary-300 space-y-4 border-y py-8" key={item.title}>
                                    <h2 className="hocus:underline text-xl">
                                        <Link href={`/${type}/${content.lang}/${item.slug}`}>{item.title}</Link>
                                    </h2>
                                    <p>{item.metadata.excerpt}</p>
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                        <div className="flex gap-1">
                                            <span className="bg-primary-300 px-4 py-1 text-sm">
                                                {item.metadata.genre}
                                            </span>
                                        </div>
                                        <span className="text-primary-600 text-sm lowercase">
                                            {formatDistance(item.metadata.date, new Date(), { addSuffix: true })} (
                                            {format(item.metadata.date, 'yyyy-MM-dd')})
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </section>
    );
};

export async function generateStaticParams() {
    return getAllTypes().flatMap((type) => ({ type }));
}

export const dynamicParams = false;
export const dynamic = 'force-static';

export default Page;
