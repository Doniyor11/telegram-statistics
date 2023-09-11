import React from 'react';
import styles from './analytics.module.scss';
import { ActionIcon, Box, Button, Checkbox, Container, Flex, Grid, Image, Input, Select, Text } from '@mantine/core';
import IconTelegram from '@/shared/assets/telegram-icon.png';
import IconGalochka from '@/shared/assets/telegram-galochka.png';
import IconCopy from '@/shared/assets/icon-copy.png';
import IconSearch from '@/shared/assets/icon-search-black.png';
import IconForward from '@/shared/assets/icon-forward.png';
import IconHistory from '@/shared/assets/icon-history.png';
import IconCalendar from '@/shared/assets/calendar.png';
import IconStatistic from '@/shared/assets/statistics.svg';
import IconEye from '@/shared/assets/icon-eye.png';
import cl from 'classnames';

const tabsU = [
  { label: 'Сегодня', value: 'today' },
  { label: 'Вчера', value: 'yesterday' },
];
const Analytics = () => {
  const [activeTabU, setActiveTabU] = React.useState('today');
  const handleTabChangeU = (value: string) => {
    setActiveTabU(value);
  };
  return (
    <div className={styles.analytics}>
      <Container size='xl'>
        <Box className={styles.analyticsCardTop}>
          <Flex justify={'space-between'}>
            <Flex gap={'0 2rem'}>
              <Image src={IconTelegram} alt={'s'} width={'6.25rem'} height={'6.25rem'} />
              <Flex direction={'column'}>
                <Text className={styles.cardTopLeftTitle}>
                  Telegram Tips
                  <Image src={IconGalochka} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  <ActionIcon p={0} size={20}>
                    <Image src={IconCopy} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  </ActionIcon>
                </Text>
                <Text className={styles.cardTopLeftSubTitle}>
                  Telegram stands for freedom and privacy and has many easy to use features.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={'column'} gap={'1.80rem 0 '}>
              <Flex gap={'0 3rem'}>
                <Text className={styles.cardTopLeftSubTitle}>
                  <Image src={IconSearch} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  Рекламные посты
                </Text>
                <Text className={styles.cardTopLeftSubTitle}>
                  <Image src={IconForward} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  Упоминания
                </Text>
                <Text className={styles.cardTopLeftSubTitle}>
                  <Image src={IconHistory} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  Все посты
                </Text>
              </Flex>
              <Flex gap={'0 0.80rem'}>
                <Input className={styles.analyticsCardTopInput}
                       placeholder={'Вы можете оставить заметку. Она будет видна только вам.'} />
                <Button className={styles.analyticsCardTopButton}>
                  Сохранить
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box className={styles.analyticsBody}>
          <Grid>
            <Grid.Col span={6}>
              <Flex direction={'column'}>
                <Text className={styles.analyticsBodyTitle}>
                  Рекламная статистика
                </Text>
                <Flex justify={'space-between'} className={styles.analyticsBodyTableHeader}>
                  <Text className={styles.analyticsBodySubTitle}>
                    Час
                  </Text>
                  <Text className={styles.analyticsBodySubTitle}>
                    Подписчиков
                  </Text>
                  <Text className={styles.analyticsBodySubTitle}>
                    Прирост
                  </Text>
                  <Text className={styles.analyticsBodySubTitle}>
                    <Checkbox />
                    <Select data={['С репостами', 'Рекламные посты', 'Упоминания', 'Все посты']}
                            className={styles.analyticsBodySelect} />
                  </Text>
                  <Text className={styles.analyticsBodySubTitle}>
                    <Image src={IconCalendar} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  </Text>
                </Flex>
                <Box className={styles.analyticsBodyCard}>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item, index) => (
                      <Flex className={styles.analyticsBodyCardItem}>
                        <Text className={styles.analyticsBodyCardTitle} color={'#000'}>
                          12:00
                        </Text>
                        <Text className={styles.analyticsBodyCardTitle} color={'#4180C6'}>
                          8'586'161
                        </Text>
                        <Text className={styles.analyticsBodyCardTitle} color={'#41C66E'}>
                          +170
                        </Text>
                        <Text className={styles.analyticsBodyCardTitle} color={'#000'}>
                          12:00
                        </Text>
                        <Text className={styles.analyticsBodyCardTitle} color={'#4180C6'}>
                          2022
                        </Text>
                      </Flex>
                    ))
                  }
                </Box>
                <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                  <Text className={styles.statusUsersTitle}>
                    Подписчиков по дням
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
                    <div className={styles.statisticsBody}>
                      <Image src={IconStatistic} width={'46.25rem'} height={'28.125rem'} />
                    </div>
                  )
                }
                {
                  activeTabU === 'yesterday' && (
                    <div className={styles.statisticsBody}>
                      <Image src={IconStatistic} width={'46.25rem'} height={'28.125rem'} />
                    </div>
                  )
                }
              </Flex>
            </Grid.Col>
            <Grid.Col span={6}>
              <Box className={styles.analyticsBodyInfo}>
                <Text className={styles.analyticsBodyInfoTitle}>Подписчиков</Text>
                <Flex justify={'space-around'} mb={'3.75rem'}>
                  <Flex direction={'column'} align={'center'} className={styles.analyticsBodyInfoItem}>
                    <Text className={styles.analyticsBodyInfoItemTitle}>Всего</Text>
                    <Text className={styles.analyticsBodyInfoItemSubTitle} color={'#4180C6'}>8'586'161</Text>
                  </Flex>
                  <Flex direction={'column'} align={'center'} className={styles.analyticsBodyInfoItem}>
                    <Text className={styles.analyticsBodyInfoItemTitle}>Сегодня</Text>
                    <Text className={styles.analyticsBodyInfoItemSubTitle} color={'#41C66E'}>+5'916</Text>
                  </Flex>
                  <Flex direction={'column'} align={'center'} className={styles.analyticsBodyInfoItem}>
                    <Text className={styles.analyticsBodyInfoItemTitle}>Неделя </Text>
                    <Text className={styles.analyticsBodyInfoItemSubTitle} color={'#41C66E'}>+35'329</Text>
                  </Flex>
                  <Flex direction={'column'} align={'center'} className={styles.analyticsBodyInfoItem}>
                    <Text className={styles.analyticsBodyInfoItemTitle}>Месяц</Text>
                    <Text className={styles.analyticsBodyInfoItemSubTitle} color={'#41C66E'}>+145'095</Text>
                  </Flex>
                </Flex>
                <Flex justify={'space-between'} mb={'0.94rem'}>
                  <Text className={styles.analyticsBodyViewTitle}>Просмотров на пост</Text>
                  <Text className={styles.analyticsBodyViewsNumber} color={'#4180C6'}>2387956</Text>
                </Flex>
                <Flex justify={'space-between'}>
                  <Text className={styles.analyticsBodyViewTitle}>За последние 24ч</Text>
                  <Text className={styles.analyticsBodyViewsNumber} color={'#4180C6'}>34500</Text>
                </Flex>
              </Box>
              <Box className={styles.analyticsBodyInfo}>
                <Flex justify={'space-between'} mb={'0.94rem'}>
                  <Text className={styles.analyticsBodyViewTitle}>ER</Text>
                  <Text className={styles.analyticsBodyViewsNumber} color={'#4180C6'}>0%</Text>
                </Flex>
                <Flex justify={'space-between'} mb={'2rem'}>
                  <Text className={styles.analyticsBodyViewTitle}>Суточный</Text>
                  <Text className={styles.analyticsBodyViewsNumber} color={'#4180C6'}>0%</Text>
                </Flex>
                <Flex justify={'space-between'}>
                  <Text className={styles.analyticsBodyViewTitle}>Упоминаний в ТГ</Text>
                  <Text className={styles.analyticsBodyViewsNumber} color={'#4180C6'}>177/62</Text>
                </Flex>
              </Box>
              <Box>
                <Flex align={'center'} justify={'space-between'} mb={'1rem'}>
                  <Text className={styles.notifTitle}>
                    Упоминания каналов
                    <Image src={IconEye} alt={'s'} width={'1.25rem'} height={'1.25rem'} />
                  </Text>
                  <Checkbox label={'С репостами'} className={styles.notifCheckbox} />
                </Flex>
                <Input className={styles.notifInput} placeholder={'Поиск по упоминаниям'} />
              </Box>
            </Grid.Col>
          </Grid>
        </Box>

      </Container>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Analytics;
