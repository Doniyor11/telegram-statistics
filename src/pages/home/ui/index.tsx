import React from 'react';
import { Box, Button, Container, Flex, Grid, Image, Tabs, Text } from '@mantine/core';
import IconUser from '@/shared/assets/icon-users.png';
import IconEye from '@/shared/assets/icon-eye.png';
import IconStatistic from '@/shared/assets/statistics.svg';
import styles from './home.module.scss';
import cl from 'classnames';
import { NewSubscribersCard, TopChannelsCard } from '@/shared/ui';
import { Link } from 'react-router-dom';

const tabs = [
  { label: 'Сегодня', value: 'today' },
  { label: 'Вчера', value: 'yesterday' },
  { label: 'За неделю', value: 'week' },
];
const tabsU = [
  { label: 'Сегодня', value: 'today' },
  { label: 'Вчера', value: 'yesterday' },
];
const tabsStatistics = [
  { label: '1 месяц', value: 'month1' },
  { label: '3 месяца', value: 'month3' },
  { label: '6 месяцев', value: 'month5' },
];

export const Home = () => {

  const [activeTab, setActiveTab] = React.useState('today');
  const [activeTabU, setActiveTabU] = React.useState('today');
  const [activeTabS, setActiveTabS] = React.useState('month1');
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  const handleTabChangeU = (value: string) => {
    setActiveTabU(value);
  };
  const handleTabChangeS = (value: string) => {
    setActiveTabS(value);
  };

  return (
    <Container size='xl' p={'3.75rem 0 4.75rem 0'}>
      <Text component={'p'} className={styles.homeTitle}>
        ТОП активных телеграмм каналов
      </Text>

      <Grid gutter={5} gutterXs='md' gutterMd='xl' gutterXl={50}>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <Grid.Col span={4}>
              <TopChannelsCard/>
            </Grid.Col>
          ))
        }
      </Grid>
      <Box className={styles.statusUsers}>
        <Grid gutter={'md'} gutterMd='xl' gutterXl={50}>
          <Grid.Col span={6}>
            <Flex align={'center'} justify={'space-between'}>
              <Text className={styles.statusUsersTitle}>
                Новые подписчики
              </Text>
              <div className={styles.statusUsersTabs}>
                {
                  tabs.map((item, index) => (
                    <Text className={cl(styles.statusUsersTabsText, [activeTab === item.value && styles.active])}
                          onClick={
                            () => handleTabChange(item.value)
                          }>
                      {item.label}
                    </Text>
                  ))
                }
              </div>
            </Flex>
            {
              activeTab === 'today' && (
                <>
                  <div className={styles.tabsBody}>
                    {
                      [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <>
                          <NewSubscribersCard />
                        </>
                      ))
                    }
                    <Flex justify={'center'} mt={'1.60rem'}>
                      <Link to={'/'} className={styles.tabsBodyButton}>
                        Посмотреть все
                      </Link>
                    </Flex>
                  </div>
                </>
              )
            }
            {
              activeTab === 'yesterday' && (
                <>
                  <div className={styles.tabsBody}>
                    {
                      [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <>
                          <NewSubscribersCard />
                        </>
                      ))
                    }
                    <Flex justify={'center'} mt={'1.60rem'}>
                      <Link to={'/'} className={styles.tabsBodyButton}>
                        Посмотреть все
                      </Link>
                    </Flex>
                  </div>
                </>
              )
            }
            {
              activeTab === 'week' && (
                <>
                  <div className={styles.tabsBody}>
                    {
                      [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <>
                          <NewSubscribersCard />
                        </>
                      ))
                    }
                    <Flex justify={'center'} mt={'1.60rem'}>
                      <Link to={'/'} className={styles.tabsBodyButton}>
                        Посмотреть все
                      </Link>
                    </Flex>
                  </div>
                </>
              )
            }
          </Grid.Col>
          <Grid.Col span={6}>
            <Flex align={'center'} justify={'space-between'}>
              <Text className={styles.statusUsersTitle}>
                Просмотры/Подписчики
              </Text>
              <div className={styles.statusUsersTabs}>
                {
                  tabsU.map((item, index) => (
                    <Text className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
                          onClick={
                            () => handleTabChangeU(item.value)
                          }>
                      {item.label}
                    </Text>
                  ))
                }
              </div>
            </Flex>
            {
              activeTabU === 'today' && (
                <>
                  <div className={styles.tabsBody}>
                    {
                      [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <>
                          <NewSubscribersCard />
                        </>
                      ))
                    }
                    <Flex justify={'center'} mt={'1.60rem'}>
                      <Link to={'/'} className={styles.tabsBodyButton}>
                        Посмотреть все
                      </Link>
                    </Flex>
                  </div>
                </>
              )
            }
            {
              activeTabU === 'yesterday' && (
                <>
                  <div className={styles.tabsBody}>
                    {
                      [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <>
                          <NewSubscribersCard />
                        </>
                      ))
                    }
                    <Flex justify={'center'} mt={'1.60rem'}>
                      <Link to={'/'} className={styles.tabsBodyButton}>
                        Посмотреть все
                      </Link>
                    </Flex>
                  </div>
                </>
              )
            }
          </Grid.Col>
        </Grid>
      </Box>
      <Box className={styles.statusUsers}>
        <Grid gutter={'md'} gutterMd='xl' gutterXl={50}>
          <Grid.Col span={6}>
            <Flex align={'center'} justify={'space-between'}>
              <Text className={styles.statusUsersTitle}>
                Рекламных записей по дням
              </Text>
              <div className={styles.statusUsersTabs}>
                {
                  tabsStatistics.map((item, index) => (
                    <Text className={cl(styles.statusUsersTabsText, [activeTabS === item.value && styles.active])}
                          onClick={
                            () => handleTabChangeS(item.value)
                          }>
                      {item.label}
                    </Text>
                  ))
                }
              </div>
            </Flex>
            {
              activeTabS === 'month1' && (
                <>
                  <div className={styles.statisticsBody}>
                    <Image src={IconStatistic} width={'46.25rem'} height={'28.125rem'} />
                  </div>

                </>
              )
            }
            {
              activeTabS === 'month3' && (
                <>
                  month3
                </>
              )
            }
            {
              activeTabS === 'month6' && (
                <>
                  month6
                </>
              )
            }
            <Flex justify={'space-around'}>
              <Flex direction={'column'} align={'center'} gap={'0.81rem 0'} mt={'1.87rem'}>
                <Text className={styles.statisticsBodyFooterTitle}>
                  Рекламных постов в базе
                </Text>
                <Text className={styles.statisticsBodyFooterSubTitle}>
                  144,989,805
                </Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={'0.81rem 0'} mt={'1.87rem'}>
                <Text className={styles.statisticsBodyFooterTitle}>
                  Опубликованно сегодня
                </Text>
                <Text className={styles.statisticsBodyFooterSubTitle}>
                  +9,414
                </Text>
              </Flex>
            </Flex>
          </Grid.Col>
          <Grid.Col span={6}>
            <Flex align={'center'} justify={'space-between'}>
              <Text className={styles.statusUsersTitle}>
                Публикаций по часам, %
              </Text>
            </Flex>
            <div className={styles.statisticsBody}>
              <Image src={IconStatistic} width={'46.25rem'} height={'28.125rem'} />
            </div>
            <Flex justify={'center'}>
              <Flex direction={'column'} align={'center'} gap={'0.81rem 0'} mt={'1.87rem'}>
                <Text className={styles.statisticsBodyFooterTitle}>
                  Всего публикаций
                </Text>
                <Text className={styles.statisticsBodyFooterSubTitle}>
                  573,378,920
                </Text>
              </Flex>

            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
};
