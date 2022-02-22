import type { NextPage } from 'next';
import { Hero } from '../components/LandingPage/Hero';
import { Header } from '../components/LandingPage/Header';
import { Features } from '../components/LandingPage/Features';
import { Resources } from '../components/LandingPage/Resources';
import { Testimonial } from '../components/LandingPage/Testimonial';
import { Support } from '../components/LandingPage/Support';
import { Footer } from '../components/LandingPage/Footer';
import { hero } from '../lib/static/dac/hero';
import { Screenshot } from '../components/LandingPage/Screenshot';
import { screenshot } from '../lib/static/dac/screenshot';
import { features, featureContent } from '../lib/static/dac/features';
import { quote } from '../lib/static/dac/quote';
import { resources } from '../lib/static/dac/resources';
import { footerNavigation } from '../lib/static/dac/footer';
import Seo from '../components/Seo';

const Home: NextPage = () => {
  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <Seo />
        <Header />
        <Hero hero={hero} />
        <Screenshot screenshot={screenshot} />
        <Features feature={features} featureContent={featureContent} />
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

export default Home;
