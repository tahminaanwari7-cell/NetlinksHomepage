
import logo from "../assets/logo.DUySRYvR_2j5iRN.avif"
import heroImg from "../assets/home-hero-1280.webp"
import img1 from "../assets/afghanistan-payments-system.webp"
import img2 from "../assets/aga-khan-foundation.webp"
import img3 from "../assets/akdn.webp"
import img4 from "../assets/etisalat.webp"
import img5 from "../assets/chemonics.webp"
import img6 from "../assets/giz (1).webp"
import tunder from "../assets/home-feature-odoo-1280.webp"
import agent from "../assets/home-feature-ai-1280.webp"
import engineer from "../assets/home-feature-engineering-1280.webp"
import x from "../assets/x.svg"
import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import youtube from "../assets/youtube.svg"
import { motion } from "motion/react"
import "./Netlinks.css"

export default function Netlinks() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const viewport = { once: true, amount: 0.2 }

  return (
    <>
      <div className="Nav">
        <img src={logo} alt="logo" />

        <ul className="menu">
          <li><a href="#">Solution</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Partner</a></li>
          <li><a href="#">Company</a></li>
        </ul>

        <a href="#" className="navbtn">
          Get Started<span className="arr">↗</span>
        </a>
      </div>

      {/* Hero animation */}
      <motion.div
        className="Hero"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div className="heroinfo" variants={fadeLeft}>
          <p className="text">
            <span className="dot">●</span>
            20 years delivering from Kabul · Afghanistan's enterprise technology partner
          </p>

          <h1 className="head1">
            Enterprise Odoo, <br />
            custom software,<br />
            and AI,
            <span className="headspan">
              engineered in<br />
              Afghanistan.
            </span>
          </h1>

          <p className="text1">
            Afghanistan-based since 2005. We built the 500,000-employee
            <br />
            Odoo HR and payroll system for the national government, and
            <br />
            Jobs.af, the country's largest job-hunting platform. Senior teams
            <br />
            in Kabul delivering for clients across Afghanistan, the GCC, India,
            <br />
            and the US.
          </p>
        </motion.div>

        <motion.div
          className="image"
          variants={fadeRight}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img src={heroImg} alt="Hero" />
        </motion.div>
      </motion.div>

      <motion.div
        className="btns"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <a href="#" className="btn1">Book a 30 minutes discovery call</a>
        <a href="#" className="btn2">Explore Service</a>
      </motion.div>

      <hr className="line" />

      {/* Statistics */}
      <motion.div
        className="under"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div className="under1" variants={fadeUp}>
          <h1 className="underhead">
            500K <span className="plus-faq">+</span>
          </h1>
          <p className="undertext">
            Employees <br />national-government <br />Odoo HR rollout
          </p>
        </motion.div>

        <motion.div className="under1" variants={fadeUp}>
          <h1 className="underhead">
            20 <span className="plus-faq">yrs </span>
          </h1>
          <p className="undertext">
            Delivering <br /> enterprise<br /> software <br />from Kabul
          </p>
        </motion.div>

        <motion.div className="under1" variants={fadeUp}>
          <h1 className="underhead">Jobs.af</h1>
          <p className="undertext">
            Afghanistan' <br /> largest job platform,<br /> built by NETLINKS
          </p>
        </motion.div>
      </motion.div>

      <section className="light">
        <div className="move">
          <p className="lighttext">
            Trusted by global enterprises and institutions
          </p>

          <div className="move1">
            <div className="slide1"><img src={img1} alt="image" /></div>
            <div className="slide1"><img src={img2} alt="image" /></div>
            <div className="slide1"><img src={img3} alt="image" /></div>
            <div className="slide1"><img src={img4} alt="image" /></div>
            <div className="slide1"><img src={img5} alt="image" /></div>
            <div className="slide1"><img src={img6} alt="image" /></div>

            <div className="slide1"><img src={img1} alt="image" /></div>
            <div className="slide1"><img src={img2} alt="image" /></div>
            <div className="slide1"><img src={img3} alt="image" /></div>
            <div className="slide1"><img src={img4} alt="image" /></div>
            <div className="slide1"><img src={img5} alt="image" /></div>
            <div className="slide1"><img src={img6} alt="image" /></div>
          </div>
        </div>
      </section>

      <section>
        <motion.p
          className="what"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
        >
          What we do
        </motion.p>

        <motion.div
          className="boxhead"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h1>
            Six services. One <br />
            <span className="plus-faq">accountable partner.</span>
          </h1>
          <p>
            One Afghanistan-based vendor for ERP, custom <br />
            software, AI, staff augmentation, and cloud, so nothing <br />
            falls between the seams.
          </p>
        </motion.div>

        {/* table */}
        <div className="box">
          <motion.div
            className="boxitems"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box1">
              <div className="box1child">
                <p>01 / ERP</p>
                <span className="arrow">↗</span>
              </div>
            </div>

            <div className="boxChild">
              <h1>Odoo ERP services.</h1>
              <p>
                Odoo implementation, customization,<br />
                integration, and migration from SAP, NetSuite<br />
                , Dynamics, and QuickBooks. 50+ deployments,<br />
                including a 500,000-employee HR and payroll<br />
                engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="boxitems"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box1">
              <div className="box1child">
                <p>02 / Build</p>
                <span className="arrow">↗</span>
              </div>
            </div>

            <div className="boxChild">
              <h1>
                Custom software <br /> development.
              </h1>
              <p>
                Enterprise web, mobile, and backend systems <br />
                when shelf products don't fit. Senior-only <br />
                squads, the team that builds also maintains.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="boxitems"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box1">
              <div className="box1child">
                <p>03 / AI</p>
                <span className="arrow">↗</span>
              </div>
            </div>

            <div className="boxChild">
              <h1>03 / Intelligence</h1>
              <p>
                Production AI agents grounded in your data, <br />
                governed by your rules, observable end to end. <br />
                Not demos.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="boxitems"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box1">
              <div className="box1child">
                <p>04 / Data</p>
                <span className="arrow">↗</span>
              </div>
            </div>

            <div className="boxChild">
              <h1>Digital transformation</h1>
              <p>
                Executive roadmap, enterprise architecture,<br />
                build-vs-buy, and program delivery. Twenty <br />
                years of pattern recognition you can execute.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="boxitems"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box1">
              <div className="box1child">
                <p>05 / Cloud</p>
                <span className="arrow">↗</span>
              </div>
            </div>

            <div className="boxChild">
              <h1>IT staff augmentation.</h1>
              <p>
                Senior engineers, architects, and DevOps <br />
                embedded with your team. US-led delivery, <br />
                direct-hire model, global bench in India and the <br />
                UAE.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="boxitems"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box1">
              <div className="box1child">
                <p>06 / Cloud</p>
                <span className="arrow">↗</span>
              </div>
            </div>

            <div className="boxChild">
              <h1>Cloud & managed services.</h1>
              <p>
                Managed Odoo hosting, cloud infrastructure,<br />
                24/7 monitoring, and ERP managed services on <br />
                AWS, Azure, GCP, and private cloud.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cream">
        <p className="erp">01, Odoo ERP</p>

        <motion.div
          className="odoo"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          <motion.div className="odoo1" variants={fadeLeft}>
            <h1>
              One platform. <br />
              Every department. <br />
              <span className="plus-faq">Actually integrated.</span>
            </h1>

            <p>
              Certified Odoo partner, 50+ implementations, including a <br />
              500,000-employee HR and payroll engagement for a <br />
              national government with 1,000+ users. Finance, ops,<br />
              sales, HR, and manufacturing in one platform.
            </p>

            <ul className="uldot">
              <li>
                50+ Odoo deployments delivered, including a 500,000 <br />
                -employee HR, payroll, and custom modules engagement
              </li>
              <li>
                Odoo migration from SAP, NetSuite, Microsoft Dynamics, <br />
                QuickBooks, and legacy Odoo
              </li>
              <li>
                Upgrade-safe custom Odoo modules by senior Python <br />
                engineers
              </li>
              <li>
                Enterprise Odoo for manufacturing, distribution, field <br />
                service, and public sector
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="odoo1"
            variants={fadeRight}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={tunder} alt="" />
          </motion.div>
        </motion.div>

        <a href="#" className="btnp">
          Explore odo service <span className="arr">↗</span>
        </a>

        {/*------------pic2-------------*/}

        <motion.div
          className="agent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          <motion.div className="agent1" variants={fadeLeft}>
            <img src={agent} alt="" />
          </motion.div>

          <motion.div className="agent1" variants={fadeRight}>
            <p className="agenttext">02, AI & Automation</p>

            <h1>
              Agents that don't just chat,<br />
              <span className="plus-faq">they work.</span>
            </h1>

            <p>
              Production AI agents that close tickets, reconcile <br />
              invoices, and answer procurement queries. Grounded, <br />
              governed, observable, not demos.
            </p>

            <ul className="uldot">
              <li>
                Retrieval-grounded agents with full citation and audit trail
              </li>
              <li>
                AI-powered ERP: intelligent automation inside Odoo workflows <br />
              </li>
              <li>
                Human-in-the-loop controls for regulated and high-stakes <br />
                processes
              </li>
              <li>Typical outcomes: 30%+ reduction in manual-task hours</li>
            </ul>

            <br /><br />

            <a href="#" className="btnp">
              See how it works<span className="arr">↗</span>
            </a>
          </motion.div>
        </motion.div>

        {/*---------------pic3----------------*/}

        <p className="erp">03, Custom engineering</p>

        <motion.div
          className="odoo"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          <motion.div className="odoo1" variants={fadeLeft}>
            <h1>
              When nothing off-the- <br />
              shelf <span className="plus-faq">quite fits.</span>
            </h1>

            <p>
              A senior product team, designers, PMs, engineers,<br />
              embedded with yours. Prototype in weeks, ship in <br />
              months, maintain what we build. No junior hand-offs.
            </p>

            <ul className="uldot">
              <li>
                Senior-only squads, no ticket-shuffling to offshore pools
              </li>
              <li>
                Modern stacks: TypeScript, Python, PHP, Postgres,<br />
                Kubernetes, serverless
              </li>
              <li>
                ISO 12207 + ISO 27001 certified delivery at the group level
              </li>
              <li>
                Compliance-ready from day one: SSO via SAML/OIDC, RBAC, <br />
                audit logs, encryption
              </li>
            </ul>

            <br />

            <a href="#" className="btnp">
              Engineer policy <span className="arr">↗</span>
            </a>
          </motion.div>

          <motion.div
            className="odoo11"
            variants={fadeRight}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={engineer} alt="" />
          </motion.div>
        </motion.div>
      </section>

      <section>
        <p className="industrytext">Industries</p>

        <motion.div
          className="pt"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div className="pattern" variants={fadeLeft}>
            <h1>
              Pattern recognition across <br />
              <span className="plus-faq">verticals.</span>
            </h1>
          </motion.div>

          <motion.div className="pattern" variants={fadeRight}>
            <p>
              Two decades of implementations means we've seen your <br />
              problem before. Industry templates, compliance <br />
              defaults, and playbooks included.
            </p>
          </motion.div>
        </motion.div>

        {/*---------------lines1-------------*/}
        <hr className="line2" />

        <motion.div
          className="parent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="child">
            <div className="content">
              <span>01</span>
              <h2>Manufacturing</h2>
              <p>
                Manufacturing ERP on Odoo, MRP, production planning, quality <br />
                control, and shop-floor visibility.
              </p>
            </div>
          </div>

          <div className="child">
            <span className="arrow11">↗</span>
          </div>
        </motion.div>

        {/*---------------lines2-------------*/}
        <hr className="line2" />

        <motion.div
          className="parent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="child">
            <div className="content">
              <span>02</span>
              <h2>Nonprofits</h2>
              <p>
                Nonprofit ERP, donor CRM, grant lifecycle, restricted fund accounting, and outcome <br />
                reporting.
              </p>
            </div>
          </div>

          <div className="child">
            <span className="arrow11">↗</span>
          </div>
        </motion.div>

        {/*---------------lines3-------------*/}
        <hr className="line2" />

        <motion.div
          className="parent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="child">
            <div className="content">
              <span>03</span>
              <h2>Retail & <br />e Commerce</h2>
              <p>
                Retail ERP, Odoo POS, omnichannel inventory, loyalty, and Shopify/Magento integrations.
              </p>
            </div>
          </div>

          <div className="child">
            <span className="arrow11">↗</span>
          </div>
        </motion.div>

        {/*---------------lines4-------------*/}
        <hr className="line2" />

        <motion.div
          className="parent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="child">
            <div className="content">
              <span>04</span>
              <h2>Manufacturing</h2>
              <p>
                Manufacturing ERP on Odoo, MRP, production planning, quality <br />
                control, and shop-floor visibility.
              </p>
            </div>
          </div>

          <div className="child">
            <span className="arrow11">↗</span>
          </div>
        </motion.div>

        {/*---------------lines5-------------*/}
        <hr className="line2" />

        <motion.div
          className="parent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="child">
            <div className="content">
              <span>05</span>
              <h2>Professional <br />Services</h2>
              <p>
                PSA on Odoo, project accounting, timesheet-to-invoice, resource planning, and utilization <br />
                tracking..
              </p>
            </div>
          </div>

          <div className="child">
            <span className="arrow11">↗</span>
          </div>
        </motion.div>

        {/*---------------lines6-------------*/}
        <hr className="line2" />

        <motion.div
          className="parent"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="child">
            <div className="content">
              <span>06</span>
              <h2>
                Trades & Field <br />
                Services
              </h2>
              <p>
                Field service software on Odoo, dispatch, mobile workforce, service contracts, and <br />
                preventive maintenance.
              </p>
            </div>
          </div>

          <div className="child">
            <span className="arrow11">↗</span>
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          className="yes"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8 }}
        >
          <span className="no">"</span>
          <h1>
            We didn't watch Afghanistan's <br />
            tech sector emerge, <span className="pluss-faq">we helped <br /> build it.</span>
          </h1>
          <p>Farshid Ghyasi · Founder, NETLINKS</p>
        </motion.div>
      </section>

      {/* ------ part question ------ */}

      <section className="qback">
        <motion.div
          className="headq"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p>,Questions</p>
          <h1>Answers to what CIOs actually ask.</h1>
        </motion.div>

        <section className="question">
          <motion.div
            className="ask"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ x: 5 }}
          >
            <h2>What does NETLINKS do?</h2>
            <div className="plus">+</div>
          </motion.div>

          <motion.div
            className="ask"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ x: 5 }}
          >
            <h2>How experienced is NETLINKS with Odoo?</h2>
            <div className="plus">+</div>
          </motion.div>

          <motion.div
            className="ask"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ x: 5 }}
          >
            <h2>What industries does NETLINKS serve?</h2>
            <div className="plus">+</div>
          </motion.div>

          <motion.div
            className="ask"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            whileHover={{ x: 5 }}
          >
            <h2>How does an engagement with NETLINKS start?</h2>
            <div className="plus">+</div>
          </motion.div>
        </section>

        {/* ------ part last ------ */}

        <section>
          <motion.div
            className="purple"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
          >
            <div className="purp">
              <h1>Talk to a senior architect <br /> this week.</h1>

              <p>
                30-minute call. Walk away with a phased plan and fixed-fee <br />
                scoping in 5 business days.
              </p>

              <button>Book a 30-min discovery call</button>
            </div>
          </motion.div>
        </section>

        {/* ------ footer ------ */}

        <footer>
          <div className="foot">
            <div className="end">
              <img src={logo} alt="NETLINKS logo" />

              <p>
                A global technology partner for Odoo ERP <br />
                implementation, custom software <br />
                development, AI automation, and digital <br />
                transformation.
                <br />
                <br />
                info@netlinks.af
                <br />
                077-302-0101
                <br />
                NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw
                <br />
                Kabul, Afghanistan
              </p>

              <br />

              <div className="img">
                <div className="footimg">
                  <img src={x} alt="X" />
                </div>

                <div className="footimg">
                  <img src={github} alt="GitHub" />
                </div>

                <div className="footimg">
                  <img src={instagram} alt="Instagram" />
                </div>

                <div className="footimg">
                  <img src={youtube} alt="YouTube" />
                </div>
              </div>
            </div>

            <div className="end">
              <p>Solutions</p>
              <br />
              <a href="#">CRM</a>
              <br />
              <a href="#">Sales management</a>
              <br />
              <a href="#">Point of sale</a>
              <br />
              <a href="#">Accounting</a>
              <br />
              <a href="#">Inventory</a>
              <br />
            </div>

            <div className="end">
              <p>Services</p>
              <br />
              <a href="#">Odoo ERP services</a>
              <br />
              <a href="#">Custom software</a>
              <br />
              <a href="#">AI & automation</a>
              <br />
              <a href="#">IT staff augmentation</a>
              <br />
              <a href="#">Digital transformation</a>
              <br />
              <a href="#">Cloud & managed</a>
            </div>

            <div className="end">
              <p>Industries</p>
              <br />
              <a href="#">Manufacturing</a>
              <br />
              <a href="#">Retail & E-commerce</a>
              <br />
              <a href="#">Trades & field services</a>
              <br />
              <a href="#">Professional services</a>
              <br />
              <a href="#">Nonprofits</a>
            </div>

            <div className="end">
              <p>Company</p>
              <br />
              <a href="#">About</a>
              <br />
              <a href="#">Customers</a>
              <br />
              <a href="#">Service areas</a>
              <br />
              <a href="#">Blog</a>
              <br />
              <a href="#">Contact</a>
              <br />
              <a href="#">NETLINKS US</a>
            </div>
          </div>
        </footer>

        <div className="last">
          <div className="part">
            <p>© 2026 NETLINKS. All rights reserved.</p>
          </div>

          <div className="part">
            <p>
              Sitemap · Privacy policy · Terms of use
              <a href="#"> · Dark mode</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
