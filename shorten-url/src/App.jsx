import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import URLInput from "./URLInput";
import WebflowLogo from "./webflow_logo";
import styled from "styled-components";
import makeRandomId from "./utils";

const AppContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #F4F3F3;
  max-width: 600px;
  margin: 0 auto;
  min-height: 500px;
`;

const ContentSection = styled.section`
  padding: 30px 50px;
`;

const BrandMessaging = styled.aside`
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: .5px solid #CCCCCC;
  font-size: .8rem;
`;

const DescriptionSpan = styled.p`
  margin-bottom: 10px;
`

const App = props => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    let timeoutId;
    if (url !== undefined && url.length !== 0 && !isLoading) {
      // remove http|https
      const domain = url.slice(0).replace(/(^\w+:|^)\/\//, ''); 
      if (!urls.find(([url]) => url === domain)) {
        setIsLoading(true);
        /* 
        This is a mock service from the URL Shortener challenge.
        */
        timeoutId = setTimeout(() => {
          const result = 'https://wfl.io/' + makeRandomId();
          setIsLoading(false);
          setUrls([[domain, result]].concat(urls));
          setUrl(undefined);
        }, 1500);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [url]);

  return (
    <AppContainer>
      <BrandMessaging>
        <p>Please refer to our <a href="https://brand-at.webflow.io/guidelines" target="_blank">brand guidelines.</a></p>
      </BrandMessaging>
      <ContentSection>
        <WebflowLogo />
        <h1>Link Shortener</h1>
        <DescriptionSpan>Enter a link to a website and we’ll return a shortened version of it</DescriptionSpan>
        
        { /*
          Hello candidate! URLInput is your component.
          Please edit the src/URLInput.jsx and satisfy the tests
          using data-automation attributes (see description)
        */ }
        
        <URLInput 
          urls={urls} 
          onSubmit={setUrl}
          isLoading={isLoading} />
        
      </ContentSection>
    </AppContainer>
  );
}

export default App;