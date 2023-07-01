import getData from "@/utils/firebase/firestore/getData";
import { notFound } from 'next/navigation';
import { DynamicSection } from '@/components/sections/DynamicSection';

export default async function Home() {
  // const { content } = await useFetchPage('home');

  const content = await getData('pages', 'home');

  if (!content?.slug) {
    notFound();
  }

  return (
    <>
      {content.sections?.map((section: string) => {
        return <DynamicSection key={section} section={section} />;
      })}
    </>
  );

}
