import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts-json';
import Link from 'next/link';

const aiChatbots = [
  { name: 'ChatGPT', url: 'https://chat.openai.com' },
  { name: 'Claude', url: 'https://claude.ai' },
  { name: 'Google Gemini', url: 'https://gemini.google.com' },
  { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
  { name: 'Perplexity AI', url: 'https://www.perplexity.ai' },
  { name: 'You.com', url: 'https://you.com' },
  { name: 'Poe', url: 'https://poe.com' },
  { name: 'HuggingChat', url: 'https://huggingface.co/chat' },
  { name: 'Pi AI', url: 'https://pi.ai' },
  { name: 'Mistral Chat', url: 'https://chat.mistral.ai' },
  { name: 'DeepSeek', url: 'https://chat.deepseek.com' },
  { name: 'Grok', url: 'https://grok.x.ai' },
  { name: 'Meta AI', url: 'https://www.meta.ai' },
  { name: 'Cohere Coral', url: 'https://coral.cohere.com' },
  { name: 'Character.ai', url: 'https://character.ai' },
  { name: 'Jasper AI', url: 'https://www.jasper.ai' },
  { name: 'Copy.ai', url: 'https://www.copy.ai' },
  { name: 'Writesonic', url: 'https://writesonic.com' },
  { name: 'Chatsonic', url: 'https://writesonic.com/chat' },
  { name: 'Forefront AI', url: 'https://www.forefront.ai' },
  { name: 'OpenRouter', url: 'https://openrouter.ai' },
  { name: 'Phind', url: 'https://www.phind.com' },
];

export default function Home({ allPostsData }) {
  return (
    <div style={{ backgroundColor: '#faf8f5', minHeight: '100vh', padding: '1rem', fontFamily: 'Georgia, serif', color: '#2d3748' }}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/* Intro Section */}
        <section className={utilStyles.headingMd}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>Здравствуйте. Меня зовут Сундар Пичаи. Я веб-разработчик из Санта-Розы, Калифорния.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            (Пичаи перешёл в Google в 2004 году, где он возглавлял направления менеджмента и
            инновационной деятельности линеек клиент-ориентированных продуктов Google, в том числе Google Chrome
            и Chrome OS, а также в значительной степени отвечал за Google Drive.{' '}
            <a href="https://nextjs.org/learn" style={{ fontSize: '1.1rem', color: '#2563eb' }}>
              our Next.js tutorial
            </a>.)
          </p>
        </section>

        {/* AI Chatbot Links Section */}
        <section className={utilStyles.headingMd}>
          <h2 className={utilStyles.headingLg} style={{ color: '#1a202c' }}>AI Chatbots Available Online</h2>
          <ul className={utilStyles.list}>
            {aiChatbots.map(({ name, url }) => (
              <li className={utilStyles.listItem} key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.1rem', color: '#2563eb', fontWeight: '500' }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Blog Section */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg} style={{ color: '#1a202c' }}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, title, date }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`} style={{ fontSize: '1.1rem', color: '#2563eb' }}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText} style={{ color: '#718096' }}>
                  {date}
                </small>
              </li>
            ))}
          </ul>
        </section>

        {/* Extra Links Section */}
        <section className={utilStyles.headingMd}>
          <h2 style={{ color: '#1a202c' }}>Absolute URLs</h2>
          <p>
            <a
              href="https://www.w3.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.1rem', color: '#2563eb' }}
            >
              W3C
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.1rem', color: '#2563eb' }}
            >
              Google
            </a>
          </p>

          <h2 style={{ color: '#1a202c' }}>Relative URLs</h2>
          <p>
            <a href="https://react.dev/learn" style={{ fontSize: '1.1rem', color: '#2563eb' }}>
              react
            </a>
          </p>
          <p>
            <a
              href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%87%D0%B0%D0%B8,_%D0%A1%D1%83%D0%BD%D0%B4%D0%B0%D1%80"
              style={{ fontSize: '1.1rem', color: '#2563eb' }}
            >
              s. pichai
            </a>
          </p>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
