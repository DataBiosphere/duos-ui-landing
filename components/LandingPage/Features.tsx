import Features from '../../lib/types/featureType';
import { FeatureHeader } from '../../lib/types/featureContentType';
import { getIcon } from 'lib/getIcon';


export const Features: React.FC<Features & FeatureHeader> = ({
  feature,
  featureHeader: featureContent,
}) => {
  return (
    <>
      <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-base font-semibold uppercase tracking-wider text-meadow'>
            {featureContent.Category}
          </h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {featureContent.Title}
          </p>
          <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
            {featureContent.Description}
          </p>
          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {feature.map((feature) => {
                const IconComponent = getIcon(feature.Icon);
                return (
                  <div key={feature.Name} className='pt-6'>
                    <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg'>
                            <div
                              className='h-6 w-6 text-white'
                              aria-hidden='true'
                            >
                              <IconComponent />
                            </div>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          {feature.Name}
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          {feature.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
