import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import DetailsPage from '@/app/components/DetailsPage';
import { MediaType } from '@/interfaces/apiresults';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <DetailsPage id={id} mediaType={MediaType.Tv} />;
};

export default Page;
