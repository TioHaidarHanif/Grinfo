import Form from "../components/Form";

export default function test_component() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 32 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Contoh Penggunaan Form</h2>
      <Form
        fields={[
          {
            key: 'name',
            label: 'Nama',
            placeholder: 'Masukkan nama',
            autoCapitalize: 'words',
          },
          {
            key: 'email',
            label: 'Email',
            placeholder: 'Masukkan email',
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          },
        ]}
        onSubmit={values => {
          alert(`Nama: ${values.name}, Email: ${values.email}`);
        }}
        buttonText="Kirim"
        theme={{
          background: '#F5F5F5',
          secondary: '#4F46E5',
          accent: '#fff',
          highlight: '#A5A3B8',
        }}
      />
    </div>
  );
}