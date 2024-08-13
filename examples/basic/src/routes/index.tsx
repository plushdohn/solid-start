import { action } from "@solidjs/router";

const uploadFile = action(async (formData: FormData) => {
  "use server";

  const file = formData.get("file");

  console.log(file);
})

export default function Home() {
  return (
    <main>
      <form action={uploadFile} method="post">
        <input type="file" name="file" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
