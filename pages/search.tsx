import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import response from '../response';

const Search = ({ results }: any) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const { data } = await axios(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  );
  const results = useDummyData ? response : data;

  return {
    props: { results },
  };
};
