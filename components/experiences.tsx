import Image from 'next/image';
import { experiences } from '~/utils/constants';

const Experiences = () => {
    return (
        <>
            {Object.entries(experiences).map(([category, items]) => (
                <div key={category} className="space-y-4">
                    <h2 className="text-lg">{category}</h2>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4"
                            >
                                <Image
                                    className="aspect-square rounded-xl object-contain"
                                    src={`/brand/${item.img}`}
                                    alt={item.company}
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3>
                                        {item.company}
                                        {'year' in item && (
                                            <span className="text-primary-500 dark:text-primary-400 ml-2 text-sm font-normal">
                                                {item.year}
                                            </span>
                                        )}
                                    </h3>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Experiences;
