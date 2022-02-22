import React from 'react';
import { Footers } from '../../lib/types/footerType';

export const Footer: React.FC<Footers> = (footer) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className='bg-gray-50' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1'>
              <img
                className='h-10'
                src='./images/logo/DUOS-Logo-Grayscale.svg'
                alt='Company name'
              />
              <p className='text-base text-gray-500'>
                Making the world a better place by enabling researchers to
                access data faster.
              </p>
              <div className='flex space-x-6'></div>
            </div>
            <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>
                    Company
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {footer.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>
                    Legal
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {footer.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 border-t border-gray-200 py-8'>
            <p className='text-base text-gray-400 xl:text-center'>
              &copy; {currentYear} Broad Institute, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
