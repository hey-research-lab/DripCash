import { ArticleView, articleMetadata, articleParams } from "@/components/site/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articleParams("research");
export const generateMetadata = ({ params }: Props) => articleMetadata("research", params);

export default function Page({ params }: Props) {
  return <ArticleView category="research" params={params} />;
}
