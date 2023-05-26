import { Hero } from '../components/LandingPage/Hero';
import { Header } from '../components/LandingPage/Header';
import { Features } from '../components/LandingPage/Features';
import { Resources } from '../components/LandingPage/Resources';
import { Testimonial } from '../components/LandingPage/Testimonial';
import { Support } from '../components/LandingPage/Support';
import { Footer } from '../components/LandingPage/Footer';
import { Screenshot } from '../components/LandingPage/Screenshot';
import { footerNavigation } from '../lib/static/dac/footer';
import { featureContent, features } from '../lib/static/dac/features';
import Seo from '../components/Seo';
import { hero } from 'lib/static/dac/hero';
import { screenshot } from 'lib/static/dac/screenshot';
import { quote } from 'lib/static/dac/quote';
import { resources } from 'lib/static/dac/resources';

function Home() {

  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <Seo />
        <Header />
        <Hero {...hero} />
        <Screenshot {...screenshot} />
        <Features feature={features} featureHeader={featureContent} />
        <Testimonial {...quote} />
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
