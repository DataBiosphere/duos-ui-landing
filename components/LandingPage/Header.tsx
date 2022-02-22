import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

export const Header = () => {
  return (
    <Popover as='header' className='relative'>
      <div className='bg-daintree-600 pt-6'>
        <nav
          className='relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex flex-1 items-center'>
            <div className='flex w-full items-center justify-between md:w-auto'>
              <a href='#'>
                <span className='sr-only'>DUOS</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='./images/logo/DUOS-Logo-Color.svg'
                  alt=''
                />
              </a>
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='focus-ring-inset inline-flex items-center justify-center rounded-md bg-daintree-600 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <a
              href='https://duos.org'
              className='inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700'
            >
              Open DUOS
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden'
        >
          <div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='./DUOS-Logo-Color.svg'
                  alt=''
                />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='pt-5 pb-6'>
              <div className='mt-6 px-5'>
                <a
                  href='#'
                  className='block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700'
                >
                  Open DUOS
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
