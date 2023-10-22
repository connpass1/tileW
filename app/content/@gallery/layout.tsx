export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section className="col-span-2 col-start-1 row-start-2 h-full bg-fuchsia-600">GalleryLayout{children}</section>
      
  );
}