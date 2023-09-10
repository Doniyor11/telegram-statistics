import React from 'react';
import styles from './footer.module.scss';
import { Container, Grid, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import cl from 'classnames';

const Footer = () => {
  return (
    <>
      <Container size={'xl'} className={styles.footer}>
        <Grid justify={'center'}>
          <Grid.Col span={3}>
            <Text className={styles.footerTitle}>Stattron</Text>
            <ul className={styles.footerList}>
              <li><Link to={'/'} className={styles.footerListTitle}>Stattron</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Напишите нам</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Пользовательское соглашение сервиса Stattron</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Правила пользования</Link></li>
              <li><Link to={'/'} className={cl(styles.footerListTitle, styles.footerListTitleLast)}>2019-2022 ©Stattron</Link></li>
            </ul>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text className={styles.footerTitle}>Сообщество</Text>
            <ul className={styles.footerList}>
              <li><Link to={'/'} className={styles.footerListTitle}>Блог</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Исследование рынка рекламы</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Наш Telegram-канал</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Партнерская программа</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Владельцам каналов</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Отзывы о Telega.in</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>База знаний</Link></li>
            </ul>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text className={styles.footerTitle}>Stattron</Text>
            <ul className={styles.footerList}>
              <li><Link to={'/'} className={styles.footerListTitle}>Помощь</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>FAQ</Link></li>
              <li><Link to={'/'} className={styles.footerListTitle}>Поддержка</Link></li>
            </ul>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Footer;
