import React from 'react';

export default interface Features {
  feature: FeatureType[];
}

export type FeatureType = {
  name: string;
  description: string;
  icon: React.ElementType<object>;
};
