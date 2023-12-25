import AuthForm from "./components/AuthForm";

export default function Auth() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24 gap-4">
      <h1 className="text-xl font-bold text-gray-600">Template Next Auth</h1>
      <AuthForm />
      <h2 className="text-sm font-bold text-gray-600">Template Next Auth</h2>
    </main>
  );
}
