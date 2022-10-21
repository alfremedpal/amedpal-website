import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'

import { AiOutlineCloudServer, AiOutlineComment, AiOutlineCode } from 'react-icons/ai'
import { FaPython, FaNodeJs } from 'react-icons/fa'
import {
    SiDjango, SiFlask, SiNestjs, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiPostgresql, SiMongodb, SiAmazondynamodb
} from 'react-icons/si'

import Button from '../components/button/button'

import CP from '../public/aws-certified-cloud-practitioner.png'
import SA from '../public/aws-certified-solutions-architect-associate.png'

const Services: NextPage = () => {

    return (
        <div className="main">
            <Head>
                <title>Services | Alfredo Medina</title>
            </Head>

            <section>
                <h1>Services</h1>
                <p>
                    A detailed list of the services I provide, along with an estimated price. This list is not
                    fully exhausted and there may be other solutions that I can help you with, so let&apos;s talk!
                </p>
                <p>
                    We can schedule a <b>no-commitment 15 minute session</b> to chat about what you need and see if we
                    are a good fit.
                </p>
                <div className="centerMobile">
                    <Button isExternal href="https://calendly.com/amedpal/quick-intro">
                        Schedule
                    </Button>
                </div>
            </section>

            <section>
                <span>
                    <AiOutlineCloudServer /> &nbsp;
                    <h2>Cloud solution design </h2>
                </span>
                <p>
                    As an officially <b>certified AWS Solutions Architect</b> I can help you design <b>available,
                        cost-efficient, fault-tolerant, and scalable</b> distributed systems on AWS to meet any of your business
                    needs.
                </p>
                <p>
                    I will provide <b>detailed documents and visual aids</b> explaining every component in your soon-to-be
                    architecture, how they communicate and work with each other, their approximate cost, and the basic
                    configuration needed to get everything up and running.
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
                <p>
                    $ Price may vary depending on the complexity of the solution, but it is <i>usually</i> included in
                    the general consulting fee.
                </p>

            </section>

            <section>
                <span>
                    <AiOutlineCode /> &nbsp;
                    <h2>Fullstack development</h2>
                </span>
                <p>
                    Do you need help building your own custom digital solution? I got you covered. Personal or business
                    websites, <b>web applications</b>, CLI tools, <b>APIs</b>, and more. Frontend, backend, or fullstack:
                    it doesn&apos;t matter. I deliver <b>efficient</b>, and <b>easy-to-maintain</b> code ready for
                    a <b>production</b> environment. I usually work with:
                    <ul>
                        <li>Python <FaPython /> and Node <FaNodeJs /></li>
                        <ul>
                            <li>With frameworks like Django <SiDjango />, Flask <SiFlask />,
                                and NestJS <SiNestjs /> or directly within AWS Lambda</li>
                        </ul>
                        <li>JavaScript <SiJavascript /> and TypeScript <SiTypescript /></li>
                        <ul>
                            <li>With React <SiReact /> and NextJS <SiNextdotjs /></li>
                        </ul>
                    </ul>
                </p>
                <p>
                    I can also support you in the database domain. From choosing the right one for the job, to data
                    modeling and management. I like working with:
                    <ul>
                        <li>Relational databases</li>
                        <ul>
                            Like PostgreSQL <SiPostgresql /> or ay other SQL database
                        </ul>
                        <li>NoSQL databases</li>
                        <ul>
                            <li>Like MongoDB <SiMongodb /> and DynamoDB <SiAmazondynamodb /></li>
                        </ul>
                    </ul>
                </p>
                <p>
                    After the work is done I can also assist you with the <b>deployment</b>, <b>maintenance</b> or
                    <b> hosting</b> of your brand new development.
                </p>
                <p>
                    $ Price will vary depending on project complexity, time for delivery, and wether it will include
                    deployment, maintenance or hosting.
                </p>
            </section>

            <section>
                <span>
                    <AiOutlineComment /> &nbsp;
                    <h2>General consulting</h2>
                </span>
                <p>
                    Not everything needs a custom infrastructure or application, sometimes, using existing tools
                    or services is the only thing you need. Take the first step into <b>digital transformation </b>
                    and start future-proofing your business. I will guide you through the several solutions already
                    available and how to implement them in your organization.
                </p>
                <p>
                    Other things I could help you with:
                    <ul>
                        <li>Project management</li>
                        <li>Team leadership and management</li>
                        <li>Software evaluation</li>
                        <li>Infrastructure cost optimization</li>
                        <li>Existing application analysis and maintenance</li>
                        <li>Team training on specific technologies</li>
                    </ul>
                </p>
                <p>
                    $ Starts at <b>USD 150/hr</b> and will include detailed documents with each session&apos;s discussed
                    topics, agreements, and next steps (if applicable).
                </p>
                <div className="centerMobile">
                    <Button href="/contact">
                        Contact me
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Services