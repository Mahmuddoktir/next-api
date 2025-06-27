// app/post/[id]/page.tsx

type Props = {
  params: {
    id: string;
  };
};

export default function Post({ params }: Props) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700">
        Post raqami: {params.id}
      </h2>
      <p className="text-gray-600 mt-4">
        Bu post sahifasining dinamik tarkibi.
      </p>
    </div>
  );
}
