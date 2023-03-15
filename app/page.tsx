import '@/styles/globals.css'
import styles from '@/styles/home.module.css'

import logoBadge from '@/assets/ustc-badge.svg'
import logoName from '@/assets/ustc-name.svg'
import avatar from '@/assets/id.png'
import qqCode from '@/assets/qq_qr.jpg'
import wechatCode from '@/assets/wechat_qr.png'
import snapchatCode from '@/assets/snapcode.svg'

import {
  BsPersonLinesFill,
  BsTools,
  BsGithub,
  BsWechat,
  BsTencentQq,
  BsAward,
  BsStars,
  BsFileEarmarkSlides,
} from 'react-icons/bs'
import {
  FaSchool,
  FaBusinessTime,
  FaSnapchat,
  FaLaptopCode,
} from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { AiOutlineExperiment, AiOutlineFlag } from 'react-icons/ai'
import { GrAttachment } from 'react-icons/gr'
import { HiBuildingOffice2, HiOutlineBookOpen } from 'react-icons/hi2'
import { ImStatsBars } from 'react-icons/im'
import { GoRepo, GoRepoForked, GoChevronRight } from 'react-icons/go'
import {
  CplusplusOriginalIcon,
  OpenglOriginalIcon,
  MatlabOriginalIcon,
  PythonOriginalIcon,
  TypescriptOriginalIcon,
  ReactOriginalIcon,
  NumpyOriginalIcon,
  PandasOriginalIcon,
} from 'react-devicons'

import profile_md from '@/docs/profile.md'

import Image from 'next/image'
import Markdown from '@/components/Markdown'
import HoverImage from '@/components/HoverImage'

export default async function HomePage() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.grid}>
        <Profile />
        <Education />
        <Experience />
        <Skills />
      </div>
    </main>
  )
}

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        <em>Y</em>UNQIN<em>Z</em>HU
      </div>
      <hr />
      <div className={styles.profession}>
        <em>U</em>NIVERSITY OF <em>S</em>CIENCE AND <em>T</em>ECHNOLOGY OF{' '}
        <em>C</em>HINA
      </div>
      <div className={styles.contact}>
        <div>
          <HiBuildingOffice2 className={styles.icon} />
          No.96, JinZhai Road Baohe District, Hefei, Anhui, 230026, P.R.China
        </div>
        <a href="mailto:yqin02@mail.ustc.edu.cn">
          <IoIosMail className={styles.icon} />
          yqin02@mail.ustc.edu.cn
        </a>
        <span className={styles.divider} />
        <a href="https://github.com/HasiNed">
          <BsGithub className={styles.icon} />
          HasiNed
        </a>
        <span className={styles.divider} />
        <span className={styles.iconset}>
          <HoverImage className={styles.qrcode} src={qqCode} alt="">
            <BsTencentQq className={styles.icon} />
          </HoverImage>
          <HoverImage className={styles.qrcode} src={wechatCode} alt="">
            <BsWechat className={styles.icon} />
          </HoverImage>
          <HoverImage className={styles.qrcode} src={snapchatCode} alt="">
            <FaSnapchat className={styles.icon} />
          </HoverImage>
        </span>
      </div>
      <a href="https://en.ustc.edu.cn/" className={styles.logo}>
        <Image className={styles.badge} src={logoBadge} alt="" />
        <Image className={styles.name} src={logoName} alt="" />
      </a>
    </nav>
  )
}

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <BsPersonLinesFill className={styles.icon} />
        PROFILE
      </div>
      <div className={styles.content}>
        <Image className={styles.avatar} src={avatar} alt="" />
        <Markdown className={styles.markdown} content={profile_md} />
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.title}>
        <FaSchool className={styles.icon} />
        EDUCATION
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.name}>
            <div className={styles.left}>
              University of Science and Technology of China
            </div>
            <div className={styles.right}>Hefei, China</div>
          </div>
          <div className={styles.subname}>
            <div className={styles.left}>
              Bachelor of Engineering in Artificial Intelligence, Talents Class
            </div>
            <div className={styles.right}>Expected July 2024</div>
          </div>
          <div className={styles.line}>
            <BsStars className={styles.icon} />
            <b>
              GPA: <em>4.07/4.3</em>&nbsp;&nbsp;&nbsp;
              <ImStatsBars className={styles.icon} />
              Rank: <em>1/39</em>
            </b>
          </div>
          <div className={styles.line}>
            <BsAward className={styles.icon} />
            Honors:&nbsp;
            <em>
              National Scholarship, Shenzhen Stock Exchange Scholarship,
              Excellent Student Scholarship
            </em>
          </div>
          <div className={styles.line}>
            <GoRepo className={styles.icon} />
            Courses Taken:&nbsp;
            <em>Machine Learning, Data Analysis, Operations Research, etc.</em>
            ;&nbsp;
            <HiOutlineBookOpen className={styles.icon} />
            On-going:&nbsp;
            <em>
              Knowledge Engineering, Pattern Recognition, Deep Learning, etc.
            </em>
          </div>
          <div className={styles.line}>
            References:&nbsp;
            <a
              className={styles.attach}
              href="http://home.ustc.edu.cn/~hasined/misc/%E6%99%AE%E9%80%9A%E6%88%90%E7%BB%A9%E5%8D%95%E8%8B%B1%E6%96%87_%E5%87%BA%E5%9B%BD%E7%94%A8_%E6%9C%B1%E4%BA%91%E6%B2%81%28PB20061372%29.pdf"
            >
              <GrAttachment className={styles.icon} />
              transcript.pdf
            </a>
            <a
              className={styles.attach}
              href="http://home.ustc.edu.cn/~hasined/misc/%E7%BB%A9%E7%82%B9%E6%8E%92%E5%90%8D%E8%AF%81%E6%98%8E_%E5%87%BA%E5%9B%BD%E7%94%A8_%E6%9C%B1%E4%BA%91%E6%B2%81%28PB20061372%29.pdf"
            >
              <GrAttachment className={styles.icon} />
              ranking.pdf
            </a>
            <a
              className={styles.attach}
              href="https://github.com/HasiNed/my-ustc"
            >
              <GoRepoForked className={styles.icon} />
              github repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.title}>
        <FaBusinessTime className={styles.icon} />
        EXPERIENCE
      </div>
      <div className={styles.content}>
        {/* Research */}
        <p className={styles.head}>
          <AiOutlineExperiment className={styles.icon} />
          Research
        </p>
        <div className={styles.item}>
          <div className={styles.name}>
            <div className={styles.left}>
              University of North Carolina at Charlotte, KAIM Research Group
            </div>
            <div className={styles.right}>Charlotte, US</div>
          </div>
          <div className={styles.subname}>
            <div className={styles.left}>
              Remote Rsearch Intern, supervised by{' '}
              <a href="https://belkcollege.charlotte.edu/directory/lina-zhou">
                Prof. Lina Zhou
              </a>{' '}
              and her Ph.D. fellows
            </div>
            <div className={styles.right}>Spring 2022 - Present</div>
          </div>
          <div className={styles.line}>
            Fields of Study:&nbsp;
            <em>
              Misinformation Detection, Sentiment Analysis and Multi-Modal
              Learning
            </em>
          </div>
          <div className={styles.line}>
            Research Topics:&nbsp;
            <em>
              <ul>
                <GoChevronRight className={styles.icon} />
                <span>
                  Predict the results of content moderation on Reddit with the
                  RoBERTa model and analyze the impact of multi-type,
                  multi-level user engagement characteristics on model
                  performance.
                </span>
              </ul>
              <ul>
                <GoChevronRight className={styles.icon} />
                <span>
                  Apply deep learning methods of natural language understanding
                  to analyze the public&apos;s attitudes and sentiments towards
                  different trending topics on social media in the post-pandemic
                  era.
                </span>
              </ul>
              <ul>
                <GoChevronRight className={styles.icon} />
                <span>
                  Leverage short video data to build a multi-task, multi-modal
                  artificial intelligence system for analyzing the influence of
                  different video features on the sales of Tiktok e-commerce
                  products.
                </span>
              </ul>
            </em>
            Publication:
            <div className={styles.quote}>
              Wang, K., Fu, Z., Zhou, L., & <ins>Zhu, Y</ins>. (2022).
              Misinformation Moderation in Online Communities: The
              Characteristics, Degree, and Efficiency of User Engagement.{' '}
              <em>CCCIS Proceedings</em> (pp. 1-6).
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.name}>
            <div className={styles.left}>
              University of Science and Technology of China, Dept. of Management
              Science
            </div>
            <div className={styles.right}>Hefei, China</div>
          </div>
          <div className={styles.subname}>
            <div className={styles.left}>
              Student Innovation Program, supervised by{' '}
              <a href="http://bs.ustc.edu.cn/English/profile-70.html">
                Prof. Yongjun Li
              </a>
            </div>
            <div className={styles.right}>Fall 2022 - Present</div>
          </div>
          <div className={styles.line}>
            Fields of Study:&nbsp;
            <em>Bayesian Models, Dynamic Pricing and Reinforcement Learning</em>
          </div>
          <div className={styles.line}>
            Research Topic:&nbsp;
            <em>
              Dynamic pricing optimization considering learning behavior in the
              context of big data
            </em>
          </div>
        </div>
        {/* Competition */}
        <p className={styles.head}>
          <AiOutlineFlag className={styles.icon} />
          Competition
        </p>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            National 2nd prize in the Contemporary Undergraduate Mathematical
            Contest in Modeling 2022, as a team leader.
          </span>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            National 2nd prize in the 14th Chinese College Mathematics
            Competition.
          </span>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            Prizes in school-level programming competitions and hacker games.
          </span>
        </ul>
        {/* Coding */}
        <p className={styles.head}>
          <FaLaptopCode className={styles.icon} />
          Coding
        </p>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            Develop a web-based annotation tool to assist the research of
            sentiment analysis.&nbsp;
            <PythonOriginalIcon className={styles.icon} />
            <PandasOriginalIcon className={styles.icon} />
            <TypescriptOriginalIcon className={styles.icon} />
            <ReactOriginalIcon className={styles.icon} />
            <a href="https://github.com/HasiNed/sentiment-annotator">
              <BsGithub className={styles.icon} />
            </a>
          </span>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            Code a complicated data fetching, data preprocessing and model
            training pipeline for cloth size recommendation in the course of
            Machine Learning.&nbsp;
            <PythonOriginalIcon className={styles.icon} />
            <NumpyOriginalIcon className={styles.icon} />
            <PandasOriginalIcon className={styles.icon} />
            <a href="https://github.com/Dune-Z/Machine-Learning-Project">
              <BsGithub className={styles.icon} />
            </a>
            <a href="/MLProjectModel.svg">
              <BsFileEarmarkSlides className={styles.icon} />
            </a>
          </span>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            Implement classical algorithms for stereo matching in the course of
            Intro to Artificial Intelligence.&nbsp;
            <MatlabOriginalIcon className={styles.icon} />
            <a href="https://github.com/HasiNed/my-ustc/tree/main/Courses/Intro%20to%20Artificial%20Intelligence">
              <BsGithub className={styles.icon} />
            </a>
          </span>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          <span>
            Develop an experimental 2D/3D rendering engine in the freshman
            seminar.&nbsp;
            <CplusplusOriginalIcon className={styles.icon} />
            <OpenglOriginalIcon className={styles.icon} />
            <a href="https://github.com/HasiNed/my-ustc/tree/main/Misc/opengl%20learning">
              <BsGithub className={styles.icon} />
            </a>
          </span>
        </ul>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.title}>
        <BsTools className={styles.icon} />
        SKILLS
      </div>
      <div className={styles.content}>
        <ul>
          <GoChevronRight className={styles.icon} />
          Knowledge:&nbsp; fundamentals of machine learning, probability theory,
          linear algebra, logics, graph theory, etc.
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Programming languages:&nbsp; Python, Typescript, C/C++
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Data analysis:&nbsp; Pandas, Numpy, Scikit-learn
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Deep learning framework:&nbsp; PyTorch
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Developer skills:&nbsp; Git, Docker, web development (Next.js),
          computer graphics programming (OpenGL)
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Writing & typesetting:&nbsp; LaTeX, Markdown, Office and web-based
          approach
        </ul>
      </div>
    </div>
  )
}
