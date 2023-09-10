import React from 'react';
import styles from './top-channels-card.module.scss';
import { Button, Flex, Image, Text } from '@mantine/core';
import IconUser from '@/shared/assets/icon-users.png';
import IconEye from '@/shared/assets/icon-eye.png';
import { Link } from 'react-router-dom';
export const TopChannelsCard = () => {
  return (
    <>
      <div className={styles.card}>
        <Flex gap={'0 1.5rem'} align={'center'}>
          <Image src={''} withPlaceholder alt={'logo'} width={'6.25rem'} height={'6.25rem'}
                 radius={'6.25rem'} />
          <Flex align={'flex-start'} direction={'column'} gap={' 0.50rem 0'}>
            <Text className={styles.cardTitle}>Фильмы Сер..</Text>
            <Text className={styles.cardSubTitle}>
              Факты
            </Text>
          </Flex>
          <Flex align={'flex-start'} direction={'column'} gap={' 0.70rem 0'}>
            <Text className={styles.cardNumber}>
              <Image src={IconUser} withPlaceholder alt={'logo'} width={'1.25rem'} height={'1.25rem'} />
              3,451,556
            </Text>
            <Text className={styles.cardNumber}>
              <Image src={IconEye} withPlaceholder alt={'logo'} width={'1.25rem'} height={'1.25rem'} />
              208,704
            </Text>
          </Flex>
        </Flex>
        <Flex justify={'center'} mt={'1rem'}>
         <Link to={'/'}>
           <Button className={styles.cardButton} variant={'outline'}>
             Подробнее
           </Button>
         </Link>
        </Flex>
      </div>
    </>
  );
};
