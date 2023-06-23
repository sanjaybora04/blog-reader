# React Page Reader

```
npm i react-page-reader
```

```
import { PageReader } from 'react-page-reader'

const page = ()=>{
    return (
        <>
            <PageReader/>
            <div id="content"> //PageReader will read text the text in all the tags which are inside id:content
                <h1>this is a heading</h1>
                <p>this is a pararagraph</p>
            </div>
        </>
    )
}
```