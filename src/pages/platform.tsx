import pick from 'lodash/pick';
import {GetServerSidePropsContext} from 'next';
import {useFormatter, useTranslations} from 'next-intl';
import PageLayout from '@/components/PageLayout';
import PlatformListContainer from '@/components/platform/list/platform-list.container';
import Title from 'antd/es/typography/Title';

export default function Platform() {
  const t = useTranslations('Platform');
  const format = useFormatter();
  const lastUpdated = new Date('2021-12-23T10:04:45.567Z');

  return (
   <div>
   
        <Title level={2}>{t('pageTitle')}</Title>
        <PlatformListContainer/>
   </div>
  );
}

Platform.messages = ['Platform', ...PageLayout.messages];

export async function getServerSideProps({locale}: GetServerSidePropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        Platform.messages
      ),
      // Note that when `now` is passed to the app, you need to make sure the
      // value is updated from time to time, so relative times are updated. See
      // https://next-intl-docs.vercel.app/docs/usage/configuration#global-now-value
      now: new Date().getTime()
    }
  };
}