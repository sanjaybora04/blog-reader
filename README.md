# react-page-reader

[Live Demo](https://sanjaybora.vercel.app/blog/react-page-reader)

`react-page-reader` is a React component that reads the text content of elements inside the container with id `#content`. It currently supports reading paragraph (`<p>`) and heading (`<h1>`, `<h2>`, `<h3>`, `<h4>` etc.) tags within the container.

![react-page-reader](https://raw.githubusercontent.com/sanjaybora04/react-page-reader/main/react-page-reader-thumbnail.jpg)

## Installation

To install the package, use npm:

```bash
npm install react-page-reader
```

## Usage

### In a React Component

First, import and use the `PageReader` component in your React application:

```javascript
import React from 'react';
import { PageReader } from 'react-page-reader';

const Page = () => {
  return (
    <>
      {/* Include the PageReader component */}
      <PageReader />
      
      {/* Content to be read by the PageReader */}
      <div id="content">
        <h1>This is a heading</h1>
        <p>This is a paragraph</p>
      </div>
    </>
  );
};

export default Page;
```

### In a Next.js Application

For usage in a Next.js application, you need to dynamically import the `PageReader` component to ensure it is only rendered on the client-side. Create a new file `pageReader.tsx`:

```typescript
'use client';
import dynamic from 'next/dynamic';

// Dynamically import the PageReader component
const PageReader = dynamic(() => import('react-page-reader').then(mod => mod.PageReader), {
  // Specify options such as loading indicator and SSR behavior
  loading: () => <p>Loading PageReader...</p>,
  ssr: false // Ensure the component is rendered on the client-side only
});

export default PageReader;
```

Then, import and use this component in your Next.js page:

```typescript
import React from 'react';
import PageReader from './pageReader';

const Page = () => {
  return (
    <>
      {/* Include the PageReader component */}
      <PageReader />
      
      {/* Content to be read by the PageReader */}
      <div id="content">
        <h1>This is a heading</h1>
        <p>This is a paragraph</p>
      </div>
    </>
  );
};

export default Page;
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/sanjaybora04/react-page-reader/blob/main/LICENSE) file for details.

## Support

If you find this package helpful, please consider [supporting my work](https://www.paypal.com/paypalme/sanjaybora04). Your support is greatly appreciated and helps me continue to improve this project.

---