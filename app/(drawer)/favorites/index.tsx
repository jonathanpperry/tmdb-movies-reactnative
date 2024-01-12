import { Link } from 'expo-router';
import React from 'react';
import { useMMKVObject } from 'react-native-mmkv';
import Animated from 'react-native-reanimated';
import { ListItem, ScrollView } from 'tamagui';

import { Favorite } from '@/interfaces/favorites';
import { Container, Main } from '@/tamagui.config';

const Page = () => {
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');
  // console.log('🚀 ~ Page ~ favorites:', favorites);

  return (
    <Main>
      <Container>
        <ScrollView>
          {favorites?.map((fav) => (
            <Link key={fav.id} href={`/(drawer)/favorites/${fav.mediaType}/${fav.id}`} asChild>
              <ListItem
                theme="alt2"
                title={fav.name}
                size="$3"
                icon={() => (
                  <Animated.Image
                    sharedTransitionTag={`${fav.mediaType === 'movie' ? 'movie' : 'tv'}-${fav.id}`}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${fav.thumb}` }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              />
            </Link>
          ))}
        </ScrollView>
      </Container>
    </Main>
  );
};

export default Page;
