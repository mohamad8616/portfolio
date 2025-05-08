const formStyles = "rounded-md border-2 border-gray-300 p-2 text-stone-700";
export default function Admin() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <form action="" className="flex w-2/5 flex-col gap-4">
        <input type="text" placeholder="Title" className={formStyles} />
        <input type="text" placeholder="Description" className={formStyles} />
        <input type="text" placeholder="Image" className={formStyles} />
        <input type="text" placeholder="Link" className={formStyles} />
        <input type="text" placeholder="Github link" className={formStyles} />
        <input type="text" placeholder="Technology" className={formStyles} />

        <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
          Submit
        </button>
      </form>
    </main>
  );
}
