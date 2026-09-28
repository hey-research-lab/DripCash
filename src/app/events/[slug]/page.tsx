import { ArticleView, articleMetadata, articleParams } from "@/components/site/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articleParams("events");
export const generateMetadata = ({ params }: Props) => articleMetadata("events", params);

export default function Page({ params }: Props) {
  return <ArticleView category="events" params={params} />;
}
