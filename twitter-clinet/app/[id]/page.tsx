import ReactQueryProvider from "./ReactQueryProvider";
import UserPageClient from "./UserPageClient ";



interface Props {
  params: { id: string };
}

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
    <div className="p-4">
      <ReactQueryProvider>
        <UserPageClient id={id} />
      </ReactQueryProvider>
    </div>
  );
}
