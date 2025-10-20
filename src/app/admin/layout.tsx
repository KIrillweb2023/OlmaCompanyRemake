export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Админ Панель</h1>
      <nav style={{ marginBottom: '20px' }}>
        <a href="/admin" style={{ marginRight: '15px' }}>Главная</a>
        <a href="/" style={{ marginRight: '15px' }}>На сайт</a>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
}
