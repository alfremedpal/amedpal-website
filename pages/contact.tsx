import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/button/button'

import { AiOutlineMail, AiOutlineCalendar, AiOutlineForm } from 'react-icons/ai'

const Contact: NextPage = () => {
    return (
        <div className="main">
            <Head>
                <title>Contact | Alfredo Medina</title>
            </Head>

            <section>
                <h1>Contact</h1>
                <p>
                    Let&apos;s chat about what you need. You can reach me through an email, or we can schedule a
                    session to start talking. Tell me what you want, <b>get a quote</b>, or simply tell me about
                    your day.
                </p>
            </section>

            <section>
                <span>
                    <AiOutlineCalendar /> &nbsp;
                    <h2>15 minute session </h2>
                </span>
                <p>
                    Want to dive directly into it? Schedule a <b>15 minute, no-commitment session</b> so we can chat
                    about what you need and how I can help you achieve it.
                </p>
                <div className="centerMobile">
                    <Button isExternal href="https://calendly.com/amedpal/quick-intro">
                        Schedule
                    </Button>
                </div>
            </section>

            <section>
                <span>
                    <AiOutlineMail /> &nbsp;
                    <h2>Email </h2>
                </span>
                <p>
                    Send me a note at <Link href="mailto:info@amedpal.com"><a>info@amedpal.com</a></Link>
                </p>

            </section>
        </div>
    )
}

export default Contact