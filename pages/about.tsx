import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from 'next/future/image'

import CP from '../public/aws-certified-cloud-practitioner.png'
import SA from '../public/aws-certified-solutions-architect-associate.png'

import { AiOutlineUser, AiOutlineLaptop } from 'react-icons/ai'

const About: NextPage = () => {

    const getAge = (): number => {
        const birth = new Date('1995-07-24T06:15:00')
        const current = new Date(Date.now())

        return current.getFullYear() - birth.getFullYear()
    }

    return (
        <div className="main">
            <Head>
                <title>Contact | Alfredo Medina</title>
            </Head>

            <section>
                <h1>About me</h1>
                <p>
                    Hello! My name is Alfredo Medina and I have over <b>5 years of professional experience</b> in <b>designing</b>,
                    <b> building</b>, and <b>maintaining</b> production-critical applications. I have also worked as a team leader,
                    <b> growing teams</b> from the ground up and creating an environment focused in ownership and openness.
                </p>
                <p>
                    I&apos;m also a big fan of everything open-source, movies, and a huge board game geek.
                </p>
            </section>

            <section>
                <span>
                    <AiOutlineLaptop /> &nbsp;
                    <h2>Professional experience</h2>
                </span>
                <p>
                    Let me tell you a little bit about my professional career, but for even more detailed information,
                    visit my <a href="https://www.linkedin.com/in/alfredo-medina-874749121/" target="_blank" rel="noreferrer">LinkedIn profile</a>.
                    And if you want details about the services I provide and the technologies I mostly work with, go to
                    my <Link href="/services"><a>services page</a></Link>.
                </p>
                <div className="centerMobile">
                    <Image
                        src={CP}
                        alt="AWS Certified Cloud Practitioner"
                        height={150}
                    />
                    <Image
                        src={SA}
                        alt="AWS Solutions Architect"
                        height={150}
                    />
                </div>

                <h3>Leadership roles</h3>
                <p>
                    Recently I&apos;ve been in a leadership/management role in an international prop-tech startup in charge of 
                    efficiently coordinating the work, and communication of production-critical applications between 
                    technical and non-technical teams and departments.
                </p>
                <p>
                    I&apos;ve been ensuring an environment of openness and strong ownership by successfully leading 1:1 meetings,
                    team meetings, planning sessions, and overall technical assistance; dealing with
                    any kind of problem that could arise within a team, either technical or social/personal. 
                    I&apos;ve also participated in both hiring (with its respective follow up during the first months), 
                    and firing processes within the organization.
                </p>
                <p>
                    I truly enjoy building and growing teams and making sure we are aligned with the organization and deliver
                    high quality and high value products to our end users. I&apos;m no stranger to more business-like meetings where
                    topics like budgets, the general company&apos;s objectives and vision, and team or department structure are
                    commonly discussed.  
                </p>

                <h3>Development roles</h3>
                <p>
                    On the more technical side, I have touched a bit of everything over the years. I&apos;ve supported and
                    maintained legacy services and applications, worked as a QA engineer making sure the product delivered
                    is of the highest quality, I&apos;ve been tasked with build new applications from the ground up to meet specific
                    business or client needs, helped design robust architecture and solutions on the cloud, and worked with
                    DevOps teams ensuring system uptime, CI/CD processes and more.
                </p>
                <p>
                    Mostly working in web applications, I feel confident not only building and maintaining said type of solution, 
                    but also designing and deploying them in an effective, scalable, cost-efficient, and continuous manner. Working
                    with both the backend and the frontend, web applications are my expertise. And although web apps are my strong suit,
                    I can (and like) to adapt to different and new technologies and solutions.
                </p>
            </section>

            <section>
                <span>
                    <AiOutlineUser /> &nbsp;
                    <h2>Personal details</h2>
                </span>
                <p>
                    I am {getAge()} years old and I work remotely from my home in Mérida, México. I&apos;m a huge board game
                    geek, an NBA fan (OKC!), and I like to imagine myself as a cinema connoisseur.
                    Spanish is my native language but I have no problem whatsoever with English, either written or
                    conversational, at any level.
                </p>
                <p>
                    If you want to talk about movies, video games, board games or just life in general you can
                    <Link href="/contact"><a> contact me</a></Link> as well!
                </p>
            </section>
        </div>
    )
}

export default About