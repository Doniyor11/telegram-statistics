import React, { FC } from 'react';
import { Button, Container, Flex, Image, Input, Select } from '@mantine/core';
import styles from './navbar.module.scss';

import IconLogo from '@/shared/assets/logo.svg';
import IconSelect from '@/shared/assets/icon-select.svg';
import IconSearch from '@/shared/assets/icon-search.svg';
import IconSingUp from '@/shared/assets/icon-login.svg';

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <Container size={'xl'}>
        <Flex align={'center'} justify={'space-between'}>
          <Flex align={'center'} gap={'0 5.81rem'}>
            <Image src={IconLogo} alt={'logo'} className={styles.navbarLogo} width={'14.37rem'} />
            <Input placeholder={'Поиск...'} className={styles.navbarSearchInput}
                   rightSectionWidth={'1.80rem'}

                   rightSection={<Image src={IconSearch} alt={'logo'} width={'1.80rem'} mr={'0.95rem'}/>}
            />
          </Flex>
          <Flex align={'center'} gap={'0 1.88rem'}>
            <Select data={['Сервисы', 'Test']} className={styles.navbarSelectInfo} placeholder={'Сервисы'}
                    rightSection={<Image src={IconSelect} alt={'logo'} width={'1.25rem'} height={'1.25rem'} />} />
            <Button className={styles.navbarButton}>Регистрация</Button>
            <Button variant={'outline'} className={styles.navbarButtonOutline} rightIcon={<Image src={IconSingUp} alt={'logo'} width={'2.5rem'} />}>
              Войти
            </Button>
            <Select data={['Ru', 'Eng']} className={styles.navbarSelectLang} placeholder={'Ru'}
                    rightSection={<Image src={IconSelect} alt={'logo'} width={'1.25rem'} height={'1.25rem'} />} />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Navbar;
