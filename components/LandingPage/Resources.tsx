import dayjs from 'dayjs';
import React from 'react';

export type AuthorProps = {
  Name: string;
  Href: string;
  Avatar: string;
};

export type ResourceProps = {
  Id: number;
  Title: string;
  Href: string;
  Date: string;
  Datetime: string;
  Category: { name: string; href: string };
  HeaderImage: string;
  Summary: string;
  Author: AuthorProps;
  ReadingLength: string;
};

export type ResourcesProps = {
  resources: ResourceProps[];
};

export const Resources: React.FC<ResourcesProps> = ({ resources }) => {
  return (
    <>
      <div className='relative bg-gray-50 py-16 sm:py-24 lg:py-32'>
        <div className='relative'>
          <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-base font-semibold uppercase tracking-wider text-meadow'>
              Learn
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Helpful Resources
            </p>
          </div>
          <div className='mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8'>
            {resources.map((post, i) => (
              <div
                key={i}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg'
              >
                <div className='flex-shrink-0'>
                  <img
                    className='h-48 w-full object-cover'
                    src={post.HeaderImage}
                    alt=''
                  />
                </div>
                <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                  <div className='flex-1'>
                    <a href={post.Href} className='mt-2 block'>
                      <p className='text-xl font-semibold text-gray-900'>
                        {post.Title}
                      </p>
                      <p className='mt-3 text-base text-gray-500'>
                        {post.Summary}
                      </p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      <a href={post.Author.Href}>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={post.Author.Avatar}
                          alt={post.Author.Name}
                        />
                      </a>
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900'>
                        <a href={post.Author.Name} className='hover:underline'>
                          {post.Author.Name}
                        </a>
                      </p>
                      <div className='flex space-x-1 text-sm text-gray-500'>
                        <time dateTime={post.Date}>{dayjs(post.Date).format('MMM DD, YYYY')}</time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{post.ReadingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
