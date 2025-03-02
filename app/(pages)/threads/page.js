import Thread from "./components/thread";

export default function Page() {
  return (
    <div className="grid gap-4">
      <Thread/>
      <hr/>
      <Thread/>
      <hr/>
      <Thread/>
      <hr/>
      <Thread/>
      <hr/>
    </div>
  );
};