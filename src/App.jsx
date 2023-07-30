import Card from "./components/Card.jsx";
import image from "./assets/images/profile.jpg"

export default function App() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-gray-800 flex justify-center items-center">
      <Card
        imageUrl={image}
        description="Hey, I'm a Frontend Developer"
        facebookLink="https://www.linkedin.com/in/shaqqitech"
        twitterLink="https://twitter.com/shaqqitech"
        instagramLink="https://www.instagram.com/shaqqitech"
      />
      </div>
    </>
  )
}
