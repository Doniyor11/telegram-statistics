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
import IconStatisticTab from '@/shared/assets/icon-statistics-tab.png';
import IconSearch2 from '@/shared/assets/icon-search2.png';
import IconOrderHistory from '@/shared/assets/icon-order-history.png';
// import IconIncrease from '@/shared/assets/icon-increase-tab.png';
import IconAccount from '@/shared/assets/tab-account.png';
import IconTable from '@/shared/assets/views-table.svg';
// import IconInsight from '@/shared/assets/icon-insight-tab.png';

import cl from 'classnames';
import { Link } from 'react-router-dom';

const tabsU = [
  { label: 'Сегодня', value: 'today' },
  { label: 'Вчера', value: 'yesterday' },
];

const tabs = [
  { label: `${<Image src={IconStatisticTab} alt={''} width={'1.5rem'} />} Статистика`, value: 'statistics' },
  { label: 'Рекламная отдача', value: 'advertising' },
  { label: 'Динамика', value: 'dynamics' },
  { label: 'Аудитория', value: 'audience' },
  { label: 'Просмотры постов', value: 'views' },
];

const Analytics = () => {
  const [activeTabU, setActiveTabU] = React.useState('today');
  const [activeTab, setActiveTab] = React.useState('statistics');
  const handleTabChangeU = (value: string) => {
    setActiveTabU(value);
  };
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div className={styles.analytics}>
      <Container size='xl'>
        <Box className={styles.statusUsersTabs} mb={'1.5rem'}>
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
        </Box>

        {
          activeTab === 'statistics' && (
            <>
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
                <Grid gutter={'md'} gutterMd='xl' gutterXl={30}>
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
                              <Text
                                className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                            <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                          </div>
                        )
                      }
                      {
                        activeTabU === 'yesterday' && (
                          <div className={styles.statisticsBody}>
                            <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
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
                      <Input className={styles.notifInput} placeholder={'Поиск по упоминаниям'}
                             rightSection={<Image src={IconSearch2} alt={''} width={'1.5rem'} mr={'1rem'} />} />
                    </Box>
                    <Flex mb={'0.5rem'}>
                      <Text className={styles.analyticsCardWrapperItemTop}>
                        Канал
                      </Text>
                      <Text className={styles.analyticsCardWrapperItemTop}>
                        Упоминаний
                      </Text>
                      <Text className={styles.analyticsCardWrapperItemTop}>
                        Посты
                      </Text>
                    </Flex>
                    <Box className={styles.analyticsCardWrapper}>
                      {
                        [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                          <Flex justify={'space-between'} align={'center'} className={styles.analyticsCardWrapperItem}>
                            <Flex gap={'0 1.5rem'}>
                              <Image src={''} withPlaceholder width={'5rem'} height={'5rem'} radius={'6.25rem'} />
                              <Flex direction={'column'} gap={'2rem 0 '}>
                                <Text className={styles.analyticsCardWrapperTitle}>Принцессы тиндера</Text>
                                <Flex gap={'0 1.5rem'}>
                                  <Text className={styles.analyticsCardWrapperNumber}>
                                    <Image src={IconAccount} alt={''} width={'1.25rem'} />
                                    12,556
                                  </Text>
                                  <Image src={IconOrderHistory} alt={''} width={'1.80rem'} />
                                </Flex>
                              </Flex>
                            </Flex>
                            <Text className={styles.analyticsCardWrapperNumber}>1</Text>
                            <Select data={['2022-04-02', '2022-04-07', '2022-04-04', '2022-04-06']}
                                    placeholder={'2022-04-07'} className={styles.analyticsBodyCardSelect} />
                          </Flex>
                        ))
                      }
                    </Box>
                  </Grid.Col>
                </Grid>
              </Box>
            </>
          ) || activeTab === 'advertising' && (
            <>
              <Box mb={'3rem'} className={styles.analyticsCardTop}>
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
              <Grid gutter={'md'} gutterMd='xl' gutterXl={30}>
                <Grid.Col span={12}>
                  <Flex direction={'column'}>
                    <Text className={styles.analyticsBodyTitle}>
                      Динамика просмотров постов
                    </Text>
                    <Box className={styles.analyticsBox}>
                      <Text className={styles.analyticsBoxTitle}>
                        Ниже приведена таблица последних 30 постов канала и динамика числа просмотров на пост. На каждый
                        пост выводится динамика просмотров за первые 7 дней. Не забывайте при анализе проверять колонку
                        "Репостов", кликайте на цифру и смотрите список репостов.
                        При клике на указанную дату на графике загрузится список постов за указанный день.
                      </Text>
                      <Text className={styles.analyticsBoxSubTitle}>
                        Чтобы увидеть почасовую динамику охватов поста, кликните на число просмотров у поста в таблице.
                      </Text>
                    </Box>
                    <Flex className={styles.advertisingTableHeader}>
                      <Text className={styles.analyticsBodySubTitle}>
                        Дата поста
                      </Text>
                      <Text className={styles.analyticsBodySubTitle}>
                        Просмотры
                      </Text>
                      <Text className={styles.analyticsBodySubTitle}>
                        Динамика просмотров
                      </Text>
                      <Text className={styles.analyticsBodySubTitle}>
                        Репосты
                      </Text>
                      <Text className={styles.analyticsBodySubTitle}>
                        Пересылки
                      </Text>
                    </Flex>
                    <Box className={styles.analyticsBodyCard}>
                      {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item, index) => (
                          <Flex className={styles.advertisingItem} justify={'space-between'}>
                            <Text className={styles.advertisingItemTitle} color={'#000'}>
                              2022-03-24 11:16
                            </Text>
                            <Text className={styles.advertisingItemTitle} color={'#4180C6'}>
                              8'586'161
                            </Text>
                            <Text className={styles.advertisingItemTitle} color={'#41C66E'}>
                              <Image src={IconTable} alt={''} width={'7rem'} />
                            </Text>
                            <Text className={styles.advertisingItemTitle} color={'#000'}>
                              0
                            </Text>
                            <Text className={styles.advertisingItemTitle} color={'#4180C6'}>
                              6268
                            </Text>
                            <Button variant={'outline'} radius={'1.25rem'}>
                              Пост
                            </Button>
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
                            <Text
                              className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                          <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                        </div>
                      )
                    }
                    {
                      activeTabU === 'yesterday' && (
                        <div className={styles.statisticsBody}>
                          <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                        </div>
                      )
                    }
                  </Flex>
                </Grid.Col>
              </Grid>
            </>
          ) || activeTab === 'dynamics' && (
            <>
              <Box mb={'3rem'} className={styles.analyticsCardTop}>
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
              <Text className={styles.analyticsBodyTitle}>
                Выпущено рекламных постов
              </Text>
              <Grid mb={'3.13rem'}>
                <Grid.Col span={4}>
                  <Box className={styles.dynamicsBox}>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle} fw={500}>
                        Всего
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle} color={'#4180C6'}>
                        5
                      </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle}>
                        Репостов
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle}>
                        2
                      </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle}>
                        Подборок
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle}>
                        5
                      </Text>
                    </Flex>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box className={styles.dynamicsBox}>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle} fw={500}>
                        За неделю
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle} color={'#4180C6'}>
                        5
                      </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle}>
                        Репостов
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle}>
                        2
                      </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle}>
                        Подборок
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle}>
                        5
                      </Text>
                    </Flex>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box className={styles.dynamicsBox}>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle} fw={500}>
                        За месяц
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle} color={'#4180C6'}>
                        5
                      </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle}>
                        Репостов
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle}>
                        2
                      </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                      <Text className={styles.dynamicsBoxTitle}>
                        Подборок
                      </Text>
                      <Text className={styles.dynamicsBoxSubTitle}>
                        5
                      </Text>
                    </Flex>
                  </Box>
                </Grid.Col>
              </Grid>
              <Text className={styles.analyticsBodyTitle}>
                Купили рекламу у канала
              </Text>
              <Box className={styles.analyticsBox}>
                <Text className={styles.analyticsBoxTitle}>
                  <Link color={'#4180C6'} to={'/'}>Период подсчета</Link> - сколько времени прошло, прежде чем у
                  рекламируемого канала вышел
                  еще один рекламный пост в другом канале. Необходимо, чтобы не учитывать приход с другого размещения - а
                  только с указанного в текущем канале.
                </Text>
                <Text className={styles.analyticsBoxTitle}>
                  <Link color={'#4180C6'} to={'/'}>Постов продвигается</Link> - сколько еще постов вышло у продвигаемого
                  канала в период за
                  4 часа до выхода
                  текущего. Если больше 0 - то, возможно, в графе "Приход" будут учтена часть подписок с предыдущих
                  размещений, а не только с текущего.
                </Text>

                <Text>
                  <span style={{ color: '#C64141' }}>Важно!</span> Не забывайте, что приход с рекламы зависит еще и от
                  рекламируего канала и самого рекламного поста!
                  И, кроме того, у канала могут быть естественные отписки, что может сказаться на суммарной цифре прихода.
                </Text>

              </Box>
              <Box className={styles.dynamicsCardHeader}>
                <Text className={styles.dynamicsCardHeaderTitle}>
                  Рекламируемый канал
                </Text>
                <Text className={styles.dynamicsCardHeaderTitle}>
                  Размещенный пост
                </Text>
                <Text className={styles.dynamicsCardHeaderTitle}>
                  Приход
                </Text>
                <Text className={styles.dynamicsCardHeaderTitle}>
                  Период подсчета
                </Text>
                <Text className={styles.dynamicsCardHeaderTitle}>
                  Просмотров
                </Text>
                <Text className={styles.dynamicsCardHeaderTitle}>
                  Постов продвигается
                </Text>
              </Box>
              <Box mb={'3.13rem'} className={styles.dynamicsCard}>
                <Flex align={'center'}>
                  <Flex gap={'0 1.44rem'} align={'center'} className={styles.dynamicsCardImg}>
                    <Image src={''} withPlaceholder width={'3.125rem'} height={'3.125rem'} radius={'6.25rem'} />
                    <Text>Принцессы тиндера</Text>
                  </Flex>
                  <Text className={styles.dynamicsCardText} underline>
                    2021-04-29 14:18:05
                  </Text>
                  <Text className={styles.dynamicsCardText}>
                    N/А
                  </Text>
                  <Text className={styles.dynamicsCardText}>
                    N/А
                  </Text>
                  <Text className={styles.dynamicsCardText} color={'#4180C6'}>
                    2 476 460
                  </Text>
                  <Text className={styles.dynamicsCardText}>
                    2
                  </Text>
                </Flex>
              </Box>
              <Grid gutter={'md'} gutterMd='xl' gutterXl={30}>
                <Grid.Col span={6}>
                  <Flex direction={'column'}>
                    <Text className={styles.analyticsBodyTitle}>
                      Реклама канала <Link to={'/'}>Принцессы тиндера</Link>
                    </Text>
                    <Flex justify={'space-between'} mb={'0.62rem'} className={styles.analyticsBodyTableHeader}>
                      <Text className={styles.analyticsBodySubTitle}>
                        Час
                      </Text>
                      <Text className={cl(styles.analyticsBodySubTitle, styles.dynamicsBodySubTitle)}>
                        Подписчиков
                      </Text>
                      <Text className={styles.analyticsBodySubTitle}>
                        Прирост
                      </Text>
                    </Flex>
                    <Box className={styles.analyticsBodyCard}>
                      {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item, index) => (
                          <Flex className={styles.dynamicsBodyCardItem} justify={'space-between'}>
                            <Text className={styles.dynamicsBodyCardTitle} color={'#000'}>
                              12:00
                            </Text>
                            <Text className={styles.dynamicsBodyCardTitle} color={'#4180C6'}>
                              8'586'161
                            </Text>
                            <Text className={styles.dynamicsBodyCardTitle} color={'#000'} underline>
                              Упоминание в <Link to={'/'}>Neoclassica</Link>
                            </Text>
                            <Text className={styles.dynamicsBodyCardTitle} color={'#41C66E'}>
                              +170
                            </Text>
                          </Flex>
                        ))
                      }
                    </Box>

                  </Flex>
                </Grid.Col>

              </Grid>
            </>
          ) || activeTab === 'audience' && (
            <>
              <Box mb={'3rem'} className={styles.analyticsCardTop}>
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
              <Grid gutter={'md'} gutterMd='xl' gutterXl={30}>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      Охват публикаций за 24ч / число подписчиков
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      Суточный ER по дням
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      Публикаций в день
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      Рекламных записей в день
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      РРекламных упоминаний
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
              </Grid>
            </>
          ) || activeTab === 'views' && (
            <>
              <Box mb={'3rem'} className={styles.analyticsCardTop}>
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
              <Grid gutter={'md'} gutterMd='xl' gutterXl={30}>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      Охват публикаций за 24ч / число подписчиков
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
                <Grid.Col span={6}>
                  <Flex align={'center'} justify={'space-between'} mt={'5rem'}>
                    <Text className={styles.statusUsersTitle}>
                      Суточный ER по дням
                    </Text>
                    <div className={styles.statusUsersTabs}>
                      {
                        tabsU.map((item, index) => (
                          <Text
                            className={cl(styles.statusUsersTabsText, [activeTabU === item.value && styles.active])}
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
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                  {
                    activeTabU === 'yesterday' && (
                      <div className={styles.statisticsBody}>
                        <Image src={IconStatistic} width={'100%'} height={'28.125rem'} />
                      </div>
                    )
                  }
                </Grid.Col>
              </Grid>
            </>
          )
        }

      </Container>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Analytics;
