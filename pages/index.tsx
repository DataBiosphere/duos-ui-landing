import type { InferGetStaticPropsType, NextPage } from 'next';
import { Hero } from '../components/LandingPage/Hero';
import { Header } from '../components/LandingPage/Header';
import { Features } from '../components/LandingPage/Features';
import { Resources } from '../components/LandingPage/Resources';
import { Testimonial } from '../components/LandingPage/Testimonial';
import { Support } from '../components/LandingPage/Support';
import { Footer } from '../components/LandingPage/Footer';
import { Screenshot } from '../components/LandingPage/Screenshot';
import { footerNavigation } from '../lib/static/dac/footer';
import Seo from '../components/Seo';

function Home({
  hero,
  features,
  featureHeader,
  screenshot,
  quote,
  resources,
}: InferGetStaticPropsType<typeof getServerSideProps>) {

  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <Seo />
        <Header />
        <Hero hero={hero} />
        <Screenshot screenshot={screenshot} />
        <Features feature={features} featureHeader={featureHeader} />
        <Testimonial quote={quote} />
        <Resources resources={resources} />
        <Support />
        <Footer
          company={footerNavigation.company}
          legal={footerNavigation.legal}
        />
      </div>
    </div>
  );
};

// Any code inside "getServerSideProps" will only be executed on the server
export const getServerSideProps = async () => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('Authorization', `Bearer ${process.env.JWT_API_TOKEN}`);

  const fetchHero = await fetch(`${process.env.API_URL}/items/Hero?fields=Title,Subtitle,Description,InputPlaceholder,ButtonText,SubmissionSuccessText,SubmissionFailText`, {
    headers: requestHeaders,
    method: 'GET',
  });

  const fetchFeatures = await fetch(`${process.env.API_URL}/items/Features?fields=id,Name,Description,Icon`, {
    headers: requestHeaders,
    method: 'GET',
  });

  const fetchFeatureHeader = await fetch(`${process.env.API_URL}/items/FeatureHeader?fields=Title,Category,Description`, {
    headers: requestHeaders,
    method: 'GET',
  });

  const fetchScreenshot = await fetch(`${process.env.API_URL}/items/Screenshot?fields=Title,Category,Description,Image.data.full_url`, {
    headers: requestHeaders,
    method: 'GET',
  });

  const fetchQuote = await fetch(`${process.env.API_URL}/items/Quote?fields=Text,Author,Company,Image.data.full_url`, {
    headers: requestHeaders,
    method: 'GET',
  });

  const fetchResources = await fetch(`${process.env.API_URL}/items/Resources?fields=id,Title,TitleLink,Date,HeaderImage.data.full_url,Summary,AuthorName,AuthorLink,AuthorImage.data.full_url,Tags,ReadingLength`, {
    headers: requestHeaders,
    method: 'GET',
  });

  const features = await fetchFeatures.json();
  const featureHeader = await fetchFeatureHeader.json();
  const hero = await fetchHero.json();
  const screenshot = await fetchScreenshot.json();
  const quote = await fetchQuote.json();
  const resources = await fetchResources.json();

  return {
    props: {
      hero: hero.data,
      features: features.data,
      featureHeader: featureHeader.data,
      screenshot: screenshot.data,
      quote: quote.data,
      resources: resources.data,
    }
  }
}

export default Home;
