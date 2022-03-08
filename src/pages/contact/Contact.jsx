import ContactMain from '../../components/main/Main';
import FormContact from '../../components/form/Form';

export default function ContactMe() {
  return (
    <ContactMain>
      <h1>Contact</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FormContact />
      </div>
    </ContactMain>
  );
}
