import React from 'react';
import styles from './new-subscribers-card.module.scss'
import { Flex, Image, Text } from '@mantine/core';
import IconUser from '@/shared/assets/icon-users.png';
export const NewSubscribersCard = () => {
  return (
    <>
      <Flex align={'center'} justify={'space-between'} className={styles.tabsBodyItem}>
        <Flex align={'center'}>
          <Image withPlaceholder width={'3.125rem'} height={'3.125rem'} radius={'6.25rem'} />
          <Flex direction={'column'} gap={'0.30rem 0'} ml={'1.30rem'}>
            <Text className={styles.tabsTitle}>
              Принцессы тиндера
            </Text>
            <Text className={styles.tabsNumberTitle}>
              <Image src={IconUser} withPlaceholder width={'1.25rem'} height={' 1.25rem'} />
              3,451,556
            </Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={'0.30rem 0'}>
          <Text className={styles.tabsNumberBlue}>
            +12,556
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

