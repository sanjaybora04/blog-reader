import React from "react";
import "./App.css";
import { PageReader } from "./components/PageReader";

function App() {

  return (
    <div className="App">
      <PageReader />
      <section
        id="content"
        className="m-8 sm:mx-20 md:mx-32 lg:mx-40 leading-relaxed tracking-wide"
      >
        <img
          src="https://cdn.sanity.io/images/mdgpr7bk/production/1a42100ad00c9558783b823b5df9d245882a007f-1280x720.jpg"
          alt="Introducing react-page-reader: A Simple Way to Read Text Content in Your React Applications"
          className="!max-h-[70vh]"
        />
        <h1 style={{ backgroundColor: "transparent !important" }}>Introduction</h1>
        <p style={{ backgroundColor: "rgb(186, 228, 254) !important" }}>
          In today's digital age, ensuring accessibility for all users is not just a
          best practice but a necessity. Accessible web design allows people with
          disabilities to perceive, understand, navigate, and interact with websites
          effectively. One significant aspect of accessibility is making web content
          readable by screen readers, which assist visually impaired users in
          accessing information. Enter <code>react-page-reader</code>, a powerful npm
          package designed to simplify the integration of screen reader functionality
          into React applications.
        </p>
        <h2 style={{ backgroundColor: "transparent !important" }}>
          What is <code>react-page-reader</code>?
        </h2>
        <p style={{ backgroundColor: "transparent !important" }}>
          <code>react-page-reader</code> is a React component that enables your web
          application to provide audio feedback of text content to users utilizing
          screen readers. This npm package allows developers to specify a container
          (identified by its ID) within which designated HTML elements (such as
          headings, paragraphs, and lists) will be read aloud. It seamlessly
          integrates into both React and Next.js applications, ensuring a smooth user
          experience while enhancing accessibility.
        </p>
        <blockquote>
          <p style={{ backgroundColor: "transparent !important" }}>
            To find out more and get started, visit the react-page-reader{" "}
            <a href="https://www.npmjs.com/package/react-page-reader" target="_blank">
              npm package
            </a>{" "}
            or explore the{" "}
            <a
              href="https://github.com/sanjaybora04/react-page-reader#readme"
              target="_blank"
            >
              GitHub repository
            </a>
            .
          </p>
        </blockquote>
        <h2 style={{ backgroundColor: "transparent !important" }}>
          How to Use <code>react-page-reader</code>
        </h2>
        <h3 style={{ backgroundColor: "transparent !important" }}>Installation</h3>
        <p style={{ backgroundColor: "transparent !important" }}>
          To get started with <code>react-page-reader</code>, install it via npm:
        </p>
        <pre>
          <code className="language-bash">npm install react-page-reader{"\n"}</code>
        </pre>
        <h3 style={{ backgroundColor: "transparent !important" }}>
          Integration in React Applications
        </h3>
        <ol>
          <li>
            <p style={{ backgroundColor: "transparent !important" }}>
              <strong>Basic Usage</strong>:
            </p>
            <p style={{ backgroundColor: "transparent !important" }}>
              Import <code>PageReader</code> into your React component and wrap it
              around the content you want to make accessible:
            </p>
            <pre>
              <code className="language-javascript">
                import React from 'react';{"\n"}import {"{"} PageReader {"}"} from
                'react-page-reader';{"\n"}
                {"\n"}const Page = () =&gt; {"{"}
                {"\n"}
                {"  "}return ({"\n"}
                {"    "}&lt;&gt;{"\n"}
                {"      "}&lt;PageReader /&gt;{"\n"}
                {"      "}&lt;div id="content"&gt;{"\n"}
                {"        "}&lt;h1&gt;This is a heading&lt;/h1&gt;{"\n"}
                {"        "}&lt;p&gt;This is a paragraph&lt;/p&gt;{"\n"}
                {"      "}&lt;/div&gt;{"\n"}
                {"    "}&lt;/&gt;{"\n"}
                {"  "});{"\n"}
                {"}"};{"\n"}
                {"\n"}export default Page;{"\n"}
              </code>
            </pre>
          </li>
          <li>
            <p style={{ backgroundColor: "transparent !important" }}>
              <strong>Integration in Next.js Applications</strong>:
            </p>
            <p style={{ backgroundColor: "transparent !important" }}>
              For Next.js applications, ensure <code>PageReader</code> is dynamically
              imported to maintain client-side rendering:
            </p>
            <pre>
              <code className="language-typescript">
                'use client';{"\n"}import dynamic from 'next/dynamic';{"\n"}
                {"\n"}const PageReader = dynamic(() =&gt;
                import('react-page-reader').then(mod =&gt; mod.PageReader), {"{"}
                {"\n"}
                {"  "}loading: () =&gt; &lt;p&gt;Loading PageReader...&lt;/p&gt;,
                {"\n"}
                {"  "}ssr: false{"\n"}
                {"}"});{"\n"}
                {"\n"}export default PageReader;{"\n"}
              </code>
            </pre>
          </li>
        </ol>
        <h2 style={{ backgroundColor: "transparent !important" }}>
          Why Choose <code>react-page-reader</code>?
        </h2>
        <ul>
          <li>
            <p style={{ backgroundColor: "transparent !important" }}>
              <strong>Simplicity</strong>:
            </p>
            <p style={{ backgroundColor: "transparent !important" }}>
              Easily incorporate screen reader functionality into your React
              applications with minimal setup.
            </p>
          </li>
          <li>
            <p style={{ backgroundColor: "transparent !important" }}>
              <strong>Flexibility</strong>:
            </p>
            <p style={{ backgroundColor: "transparent !important" }}>
              Specify which elements to read aloud, providing a customizable user
              experience.
            </p>
          </li>
          <li>
            <p style={{ backgroundColor: "transparent !important" }}>
              <strong>Accessibility</strong>:
            </p>
            <p style={{ backgroundColor: "transparent !important" }}>
              Improve accessibility compliance and cater to a broader audience,
              including users with visual impairments.
            </p>
          </li>
        </ul>
        <h2 style={{ backgroundColor: "transparent !important" }}>Conclusion</h2>
        <p style={{ backgroundColor: "transparent !important" }}>
          By integrating <code>react-page-reader</code> into your React applications,
          you not only enhance accessibility but also demonstrate a commitment to
          inclusivity. Ensure every user can interact with your content effectively
          and independently, fostering a more accessible web environment.
        </p>
        <p style={{ backgroundColor: "transparent !important" }}>
          Ready to enhance your web accessibility efforts? Get started with{" "}
          <code>react-page-reader</code> today and empower all users to engage with
          your content seamlessly.
        </p>
        <hr />
        <h3 style={{ backgroundColor: "transparent !important" }}>Support</h3>
        <p style={{ backgroundColor: "transparent !important" }}>
          Thank you for reading! If you enjoyed this post and want to support my work,
          consider
          <a href="https://www.paypal.com/paypalme/sanjaybora04" target="_blank">
            {" "}
            supporting me
          </a>{" "}
          or sharing this post with a friend.
        </p>
      </section>


    </div>
  );
}

export default App;
