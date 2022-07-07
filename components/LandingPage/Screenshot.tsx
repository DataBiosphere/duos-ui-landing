import Screenshot from '../../lib/types/screenshotType';

export const Screenshot: React.FC<Screenshot> = ({ screenshot }) => {
  return (
    <>
      <div className='relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
          <div>
            <h2 className='text-base font-semibold uppercase tracking-wider text-meadow'>
              {screenshot.Category}
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {screenshot.Title}
            </p>
            <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
              {screenshot.Description}
            </p>
          </div>
          <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
            <img
              className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
              src={`${process.env.API_URL}/assets/${screenshot.Image}`}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
