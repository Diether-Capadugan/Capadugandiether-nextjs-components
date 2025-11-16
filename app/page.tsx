import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "#f9f9f9",
      color: "#000000",
      minHeight: "100vh"
    }}>
      <Header />
      <ProfileCard />
      <SkillsList />
      <Footer />
    </div>
  );
}
