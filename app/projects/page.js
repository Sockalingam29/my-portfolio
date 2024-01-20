import '../styles/projects/page.css';
import Image from 'next/image'
import { projects } from '../assets/data/projects.json';
import Badge from '../components/badge';

import githubLogo from "../assets/images/github.png";
import demoImg from "../assets/images/demo.png";
import websiteImg from "../assets/images/website.png";

export default function page() {
    return (
        <div className="px-4 my-16 mx-auto lg:w-4/5">
            <h1 className="text-3xl font-medium mb-14">featured projects</h1>
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li className='pageCard p-6 mb-14 border border-neutral-800 rounded-xl'>
                            <div>
                                <div className='md:flex justify-between items-center'>
                                    <div>
                                        <h2 className='text-xl font-semibold'>{project.name}</h2>
                                        <h3 className='italic'>{project.brief}</h3>
                                        {project.teamSize > 1 && <h4 className='text-sm font-light'>Team size: {project.teamSize}</h4>}
                                    </div>

                                    <div className='flex flex-wrap'>
                                        {project.githubUrl && <a className='mt-2 mr-2' href={project.githubUrl} target='_blank'>
                                            <button className="px-3 py-2 border border-neutral-700 bg-neutral-800 rounded text-sm inline-flex items-center leading-4 text-neutral-100">
                                                <Image src={githubLogo} alt="GitHub logo" width="20" height="20" />
                                                <div className="ml-2">Code</div>
                                            </button>
                                        </a>}
                                        {project.websiteUrl && <a className='mt-2 mr-2' href={project.websiteUrl} target='_blank'>
                                            <button className="px-3 py-2 border border-neutral-700 bg-neutral-800 rounded text-sm inline-flex items-center leading-4 text-neutral-100">
                                                <Image src={websiteImg} alt="GitHub logo" width="20" height="20" />
                                                <div className="ml-2">Live URL</div>
                                            </button>
                                        </a>}
                                        {project.demoUrl && <a className='mt-2 mr-2' href={project.demoUrl} target='_blank'>
                                            <button className="px-3 py-2 border border-neutral-700 bg-neutral-800 rounded text-sm inline-flex items-center leading-4 text-neutral-100">
                                                <Image src={demoImg} alt="GitHub logo" width="20" height="20" />
                                                <div className="ml-2">Demo</div>
                                            </button>
                                        </a>}
                                    </div>
                                </div>
                            </div>
                            <ul className='mt-4 mx-4 list-disc font-extralight'>
                                {project.description.map((paragraph, index) => {
                                    return (
                                        <li className='mt-2'>{paragraph}</li>
                                    )
                                })}
                            </ul>
                            <div className='flex flex-wrap mt-4'>
                                {project.skills.map((tag, index) => {
                                    return (
                                        <Badge skill={tag} />
                                    )
                                })}
                            </div>
                        </li>
                    )

                }
                )}

            </ul>
            <h1 className="text-3xl font-medium mb-6">other projects</h1>
            <p className='font-light text-lg mx-auto'>I have worked on many other projects. Check them out on <a className='font-semibold underline' href='https://www.github.com/sockalingam29' target='_blank'>my GitHub profile</a>.</p>
        </div >
    )
}
