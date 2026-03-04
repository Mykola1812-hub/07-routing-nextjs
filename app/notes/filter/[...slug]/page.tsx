import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchNotes } from "../../../../lib/api";
import { makeQueryClient } from "../../../../lib/queryClient";
import NotesFilterClient from "./NotesFilter.client";

const PER_PAGE = 12;

type NotesFilterPageProps = {
  params: { slug: string[] } | Promise<{ slug: string[] }>;
};

export default async function NotesFilterPage({ params }: NotesFilterPageProps) {
  const { slug } = await Promise.resolve(params);
  const tagParam = slug?.[0] ?? "all";
  const tagForApi = tagParam === "all" ? undefined : tagParam;
  const tagForKey = tagForApi ?? "all";

  const queryClient = makeQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page: 1, search: "", tag: tagForKey }],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
        search: undefined,
        tag: tagForApi,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesFilterClient tag={tagParam} />
    </HydrationBoundary>
  );
}
