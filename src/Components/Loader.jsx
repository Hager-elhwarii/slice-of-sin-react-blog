export default function Loader() {
  return (
    <>
      <div class="flex h-96 w-full my-28">
        <div class="flex flex-1 flex-col p-10 justify-center">
          <div class="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>

          <div class="mt-6 h-5 w-36 rounded-md bg-gray-200 animate-pulse"></div>
          <div class="mt-4 h-4 w-full rounded-md bg-gray-200 animate-pulse"></div>
          <div class="mt-2 h-4 w-full rounded-md bg-gray-200 animate-pulse"></div>
          <div class="mt-2 h-4 w-full rounded-md bg-gray-200 animate-pulse"></div>
        </div>
        <div class="flex flex-1 animate-pulse bg-gray-200 p-10"></div>
      </div>
    </>
  );
}
