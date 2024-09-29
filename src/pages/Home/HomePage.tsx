import { Container } from '../../components/layout';
import Header from '../../components/LandingPage/Headear';
import KeySection from '../../components/LandingPage/KeySection';
import SecondaryInfo from '../../components/LandingPage/SecondaryInfo';


export default function LandingPage() {
  return (
    <Container>
      <Header />
      <KeySection />
      <SecondaryInfo />
    </Container>
  );
}